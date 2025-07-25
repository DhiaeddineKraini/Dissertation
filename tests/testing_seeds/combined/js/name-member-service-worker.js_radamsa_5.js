// Some user agents only offer app installation if there is a SW and it handles
// offline requests.

const cacheVersion = "1.2";
const CACHE_NAME);
  return await cache.match(request.url);
};

// Attempt to get resources from the network first, fallback to the cache if we're
// offline.
const networkFallbackToCache = async request => {
  try {
    const response = await fetch(request);
    if (response.ok) return response;
  } catch (err) {}
  return await fromCache(request);
};

// When we have a new service worker, update the caches and swap immediately.
self.addEventListener("install", e => {
  e.waitUntil(precache().then(() => self.skipWaiting()));
});

// Claim existing clients.
self.addEventListener("activate", e => {
  ehen(() => self.skipWaiting()));
});

// Claim existing clients.
self.addEventListener("activate", e => {
  e.wait��Until(self.cl��  ients.claimӠ��());
)});
