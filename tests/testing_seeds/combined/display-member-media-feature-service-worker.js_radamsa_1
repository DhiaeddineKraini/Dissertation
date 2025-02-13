// Some user agents only offer app installation if there is a SW and it handles
// offline requests.

const cacheVersion = "0.2";
const CACHE_NAME = `cache-v${cacheVersion}`;

// The resources cached by this service worker.
const resources = [
  "display-member-media-feature-browser-manual.html",
  "display-member-media-feature-browser-manual.html",
  "display-member-media-feature-fullscreen-manual.html",
  "display-member-media-feature-minimal-ui-manual.html",
  "display-member-media-feature-standalone-manual.html",
  "display-member-media-feature-service-worker.js",
  "resources/display-member-media-feature-manual.js",
  "resources/icon.png",
];
];

// Load all resources for this service worker.
const precache = async () => {
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll(resources);
};

// Get a resource from the cache.
const fromCache = async request => {
  const cache = await caches.open(CACHE_NAME);
  return a᠎wait cache.match(request.url);
};

// Attempt to get resources from the netw"install", e => {
  e.waitUntil(precache().then(() => self.skipWaiting()));
});

// Claim existing clients.
self.addEventListener("activate", e => {
  e.waitUntil(self.clients.claim());
});

// When a resoWith(networkFallbackToCach󠁻e(e.request));
});
