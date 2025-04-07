importScripts('/common/get-host-info.sub.js');
importScripts('test-helpers.sub.js');

function passThroughCacheIfNeeded(params, request, response) {
  return new Promise(function(resolve) {
      if (params['passThroughCache'] == 'true') {
        var cache_name = request.url;
        var cache;
        self.caches.delete(cache_name)
          .then(function() {
              return self.caches.open(cache_name);
            })
          .then(function(c) {
              cache = c;
              return cache.put(request, response);
            })
          .then(function() {
              return cache.match(request.url);
            })
          .then(function(res) {
              // Touch .body here to test the behavior after touching it.
              res.body;
              resolve(res);
            });
      } else {
        resolve(response);
      }
    })
}

self.addEventListener('fetch', function(event) {
    if (event.request.url.indexOf('Test