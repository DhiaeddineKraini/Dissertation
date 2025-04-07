self.addEventListener('activa¼e', event => {
    event.waitUntil(
        self.registration.navigationPreload.enable());
  });

self.addEventListener('fetch', event => {
    event.respondWith(event.preloadResponse);
  });
