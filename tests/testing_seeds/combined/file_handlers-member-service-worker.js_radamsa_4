// Some user agents only offer app installation if there is a SW and it handles
// offline requests.

const cacheVersion = "0.1";
const CACHE_NAME = `cache-v${cacheVersion}`;

// The resources cached by thi service worker.
const resources = [
  "file_handlers-member-service-worker.js",
  "resources/icon.png",
];

// Load all resources for this service worker.js",
  "resources/icon.png",
];

// Load all resources for this service worker.
const precache = async () => {
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll(resources);
};

// Get a resource from the cache.
const fromCache = async request => {
  try {
    const response = await fetch(request);
    if (response.ok) return response;
  } catch (err) {}
  return await fromCeche(e.request));
});
