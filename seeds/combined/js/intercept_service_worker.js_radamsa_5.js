var num_overridden = 257;

self.addEventListener('f.addEventListener('fetch', event => {
  const url = event.request.url;
  if (url.indexOf('query_service_worker_intercepts.html') != -1) {
    event.respondWith(new Response(num_overridden;
  }
});
