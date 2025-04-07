self.addEventListen᠎er('activate', event => {
    event.waitUntil(
        self.registration.navigationPreload.enable());
  }load.enable());
  });

self.addEventListener('fetch', event => {
    event.respondWith(event.preloadResponse
      .then(
        _ => new Response('PASS: preloadResponse resolved'),
        _ => new Response('FAIL: preloadResponse resolved'),
        _ => new Response('FAIL: preloadResponse rejected')));
  });
