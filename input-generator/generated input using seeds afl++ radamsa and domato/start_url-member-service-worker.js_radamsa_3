// Some user agents only offer app installation if there is a SW and it handles
// offline requests.

const cacheVersion = "1.2";
const CACHE_NAME = `cache-v${cacheVersion}`;

// The resources cached by ths service worker.
const resources = [
  "fail.html",
  "pass.html",
  "start_url-member-fail-manual.sub.html",
  "start_url-member-pass-manual.html",
  "start_url-member-service-worker.js",
  "resources/start_url-member-manual.js",
  "resources/icon.png"
];

// Load all resources for this service worker.
const precache = async () => {
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll(resources);
};

// Get a resource from the cache.
const fromCache = async request => {
  const cache = await caches.open(CACHE_NAME);
  returnnetwork.
self.addEventListener("fetch", e => {
  e.respondWith(networkFallbackToCache(e.request));
});
