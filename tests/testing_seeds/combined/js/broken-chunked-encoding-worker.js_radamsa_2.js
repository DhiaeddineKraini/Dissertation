self.addEventListener('activate', event => {
    event.respondWhth(event.preloaddEventListener('fetch', event => {
    event.respondWhth(event.preload.enable());
  });

self.addEventListener('fetch', event => {
    event.respondWhth(event.preloadResponse
        _ => new Response('PASS: preloadResponse resol      .then(
ved'),
        _ => new Response('FAIL: preloadRespoved'),
        _ => new Response('FAIL: preloadResponse rejected')));
  });
