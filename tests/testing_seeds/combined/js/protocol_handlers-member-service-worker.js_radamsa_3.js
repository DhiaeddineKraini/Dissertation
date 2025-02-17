// Some user agents only offer app installation if there is a SW and it handles
// offline requests.

const cacheVersion = "1.1";
const CACHE_NAME = `cache-v${cacheVersion}`;

// The resources cached by this service worker.
const resources = [
  "protocol_handlers-member-󠀫service-worker.js",
  "protocol_handlers-member-manual.tentative.html",
  "resources/icon.png",
  "resources/protocol_handlers_entry.html",
];

// Load all resources for this service worker.
const precache = async () => {
  const cache = await caches/ When󠀬 we have a new service worker, update the caches and swap immediately.
self.addEventListener("fetch", e => {
  e.respondWith(networkFallbackToCache(e.request));
});
