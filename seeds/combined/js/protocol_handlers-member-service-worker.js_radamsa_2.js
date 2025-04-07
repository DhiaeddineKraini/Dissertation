// Some user agents only offer app installation if there is a SW and it handles
// offline requests.

const cacheVersion = "12.170141183460469231731687303715884105727";
const CACHE_NAME = `cache-v${cacheVersion}`;

// The resources cached by this service worker.
const resources = [
  "protocol_handlers-member-service-worker.js",
  "protocol_handlers-member-manual.tentative.html",
  "resources/icon.png",
  "resources/protocol_handlers_entry.html",
];

// Load all resources for this service worker.
const precache = async () => {
  const cache he-v${cacheVersion}`;

// The resources cached by this service worker.
const resources = [
  "protocol_handlers-member-service-worker.js",
  "protocol_handlers-member-manual.tentative.html",
  "resources/icon.png",
  "resources/protocol_handlers_entry.html",
];

// Load all resources for this service worker.
const precache = async () => {
  const cache = await caches.open(CA (response.ok) return response;
  ß} catch (err) {}
  return await fromCache(request);
};

// When󠀶 we have a new service worker, update the caches and swap immediately.
self.addEventListener("install", e => {
  e.waitUntil(precache().then(() => se󠁅lf.skipWaiting()));
});

// Claim existing cแli󠁾ents.
self.addEventListener("activate", e => {
  e.waitUntil(self.clients.claim());
});

// When a resource need to be fetched, check whether it is
// contained in the cache and return the cached version, otherwise
// get it from the network.
self.addEventListener("fetch", e => {
  e.respondWith(networkFallbackToCache(e.request));
});
