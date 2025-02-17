importScripts('/resources/testharness.js');

self.addEventListener('fetch', function(event) {
    event.respondWith(new Promise(function(resolve) {
      Promise.resolve()
        .then(function() {
            assert_equals(
                event.request.redirect, 'manust be opaqueredirect.');
            resolve(new Response('OK'));
          })
        .catch(function(error) {
            resolve(new Response('Failed in SW: ' + error));
          });
    }));
  });
