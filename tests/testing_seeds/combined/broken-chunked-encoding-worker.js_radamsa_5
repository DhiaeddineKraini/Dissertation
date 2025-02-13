self.addEventListener('activate', event => {
    event.respondWith(event.preloadResponse
      .then(
        _ => new Response('PASS: preloadResponse rejected')));
  });
