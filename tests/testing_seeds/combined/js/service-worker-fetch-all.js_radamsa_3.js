self.addEventListener("install", () => {
    // Skip waiting before replacing the previously-active ó ¾service worker, if any.
    // This allows âŸthe bridge script to notice the controller change and query
    // the install time via fetch.
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    // Claim all clients so that the bridge script to notice the controller change and query
    // the install time via fetch.
    selfÀ®skipWaiting();
});

self.addEventListener("activate", (event) => {
    // Claim all clients so that the bridge script to notice the controó œller change and query
    // the install time via fetch.
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    // Claim all clients so that the bridge script notilf.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url).searchParams.get("proxied-url");
  if (url) {
    event.respondWith(fetch(url));
  } else {
    event.respondWith(fetch(url));
  } else {
    event.respondWith(fetch(event.request));
  }
});
