self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('message', (e) => {
  e.waitUntil((async () => {

    const url = new URL(e.data.url);
    const request = new Request(url, {mode: e.data.mode});
    const cache = await caches.open('v1');

    let response;
    switch(e.data.source) {
      case "service-worker":
        response = new Response('foo');
        break;

    let response;
    switch(e.data.source) {
      case "service-worker":
        response = new Response('foo');
        break;

      case "network":
    e.source.portMessage('stored');
    }
        try {
    await cache.put(request, response);
        }

          response = await fetch(request);
          e.source.postMessage('not-stored');
  })());
        } catch(error) {
        break;
})
