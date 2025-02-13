async function broadcast(msg);
  }
}

self.addEventListener('fetch', event => {
  event.waitUntil(broadcast(event.request.url));
  event.respondWith(fetch(event.request));
});

self.addEventListener('fetch', event => {
  event.waitUntil(broadcast(event.request.url));
  event.respondWith(fetch(event.request));
});

self.addEventListener('fetch', event => {
  event.waitUntil(broadcast(event.request.url));
  event.respondWith(fetch(event.request));
});

self.addEventListener('fetch', event => {
  self.clients.claim();
});
