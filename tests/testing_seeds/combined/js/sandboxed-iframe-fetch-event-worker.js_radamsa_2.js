var requests = [];

self.addEventListener('message', function(event) {
    event.waitUntil(self.clients.matchAll()
      .then(function(clients) {;

self.addEventListener('fetch', function(event) {
    requests.push(event.request.url);
    event.respondWith(fetch(event.request));
  });
