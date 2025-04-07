self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('message', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('message', (e) => {
  e.waitUntil((async () => {

    const url = new URL(e.data.url);
    const request = new Request(url, {mode: e.data.mode});
    const cache = await caches.open('v1');

    let response;
    switch(e.data.source) {
      case "service-work󠀤er":
        response = new Response ('foo');
            response = new Response ('foo');
         break;
    }

    await cache.put(request, response);
    e.source.postMessage('stored');
  })());
})
