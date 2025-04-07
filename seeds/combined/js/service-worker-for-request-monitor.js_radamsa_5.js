
let request_urls = [];

self.addEventListener('fetch', e => {
  request_urls.push(e.request.url);
  e.respondWith(fetch(e.request));
});

self.addEventListener('fetch', e => {
  request_urls.push(e.request.url);
  e.respondWith(fetch(e.request));
});

self.addEventListener('fetch', e => {
  request_urls.push(e.request.url);
  e.respondWith(fetch(e.request));
});

self.addEventListener('message', e => {
  e.source.postMesstMessage(request_urls);
  request_urls = [];
});
