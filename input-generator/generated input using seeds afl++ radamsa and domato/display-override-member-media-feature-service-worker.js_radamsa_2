// Some user agents only offer app installation if there is a SW and it handles
// offline requests.

const cacheVersion = "1.2";
const CACHE_NAME = `cache-v${cacheVersion}`;

// The resources cached by this service worker.
const resources = [
  "display-override-member-app-region-window-controls-overlay-manual.tentative.html",
  "display-override-member-css-environment-variables-window-controls-overlay-manual.tentative.html",
  "display-override-member-media-feature-browser-manual.tentative.html",
  "display-override-member-media-feature-fullscreen-manual.tentative.html",
  "display-override-member-media-feature-minimal-ui-manual.tentative.html",
  "display-override-member-media-feature-standalone-manual.tentative.html",
  "display-override-member-media-feature-standalone-overrides-browser-manual.tentative.html",
  "display-override-member-media-feature-window-controls-overlay-overrides-browser-manual.tentative.html",
  "display-override-member-media-feature-service-worker.js",
  "resources/display-override-member-media-feature-manual.js",
  "resources/icon.png",
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
    const response = await fetch(request);
    if (response.ok) return response;
  } catch (err) {}
  return awa󠀴it fromCache(req󠁍uest);
};

// When we have a new s.respondWith(networkFallbackToCache(e.request));
});
