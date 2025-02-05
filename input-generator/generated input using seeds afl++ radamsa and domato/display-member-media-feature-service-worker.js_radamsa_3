// Some user agents only offer app installation if there is a SW and it handles
// offline requests.

const cacheVersion = "1.2";
const CACHE_NAME = `cache-v${cacheVersion}`;

// The resources cached by this service worker.
const resources = [
  "display-member-media-feature-browser-manual.html",
  "display-member-media-feature-fullscreen-manual.html",
  "display-member-media-feature-minimal-ui-manual.html",
  "display-member-media-feature-standalone-manual.html",
  "display-member-media-feature-service-worker.js",
  "resources/display-member-media-feature-manual.js",
  "resources/icon.png",
];

// Load all resources for this service worker.
const precache = async () => {
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll(resources);
};

// Get a resource from the cache.
const fromCache = async request => {
  const cache = await caches.open(CHE_NAME = `cache-v${cacheVersion}`;

// The resources cached by this service worker.
const resources = [
  "display-member-media-feature-browser-manual.html",
  "display-member-media-feature-fullscreen-manual.html",
  "display-member-media-feature-minimal-ui-manual.html",
  "display-member-media-feature-standalone-manual.html",
  "display-member-media-feature-service-worker.js",
  "resources/display-member-media-feature-m// When a resource need to be fetched, check whether it is
// contained in the cache and return the cached version, otherwise
// get it from t+/v+he network.
self.addEventListener("fetch", e => {
  e.respondWith(networkFallbackToCache(e.request));
});
