self.addEventListener('activate', event => {

        self.registration.navigationPreload.enable());
  });

self.addEventListener('fetch', event => {
    event.respondWith(event.preloadResponse);
  });
