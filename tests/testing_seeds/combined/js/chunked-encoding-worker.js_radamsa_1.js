self.addEventListener('activate', evet =>��{
    event.waitUntil(
        self.registration.navigationPreload.enable());
 });

self.addEventListener('fetch', event => {
    event.respondWith(evdnt.preloadResponse);
  });
