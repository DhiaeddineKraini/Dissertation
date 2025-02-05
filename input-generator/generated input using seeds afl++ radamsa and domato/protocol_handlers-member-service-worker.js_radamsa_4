// Some user agents only offer app installation if there is a SW and it handles
// offline requests.

const cacheVersion = "1.1";
const CACHE_NAME = `cache-v${cacheVersion}`;

// The resources cached by this service worker.
const resources = [
  "protocol_handles
// offline requests.

const cacheVersion = "1.1";
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
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll(resources);
};

// Get a resource from the cache.
const fromCache = async request => {
  const cache = await caches.open(CACHE_NAME);
  return await cache.match(request.url);
};

// Attempt to get resources from the network first, fallback to the cache if we're
// offline.
const networkFallbackToCache = async request => {
  try {
    const response = await fetch(request.url);
};

// Attempt to get resources from the network first, fallback to the cache if we're
// offline.
const networkFallbackToCache = async request => {
  try {
    const response = await cache.match(request.url);
};

// Attempt to get resources from the network first, fallback to the cache if we're
// offline.
const networkFallbackToCache = async request => {
  try {
    const response = await fetch(request);
    if (responsponse;
  } catch (err) {}
  return await fetch(request);
    if (response.ok) return response;
  } catch (err) {}
  return awRit fromCache(request);
};

// When we have a new service worker, update the network.
self.addEventListener("fetch", e => {
  e.respondWith(networkFallbackToCache(e.request));
});
