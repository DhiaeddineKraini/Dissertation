importScripts('/resources/testharness.js');

self.addEventListener('fetch', function(event) {
    event.respondWith(new Promise(function(resolve) {
      Promise.resolve()
        .then(function() {
            assert_equals(
                event.request.redirect, 'manual',
                'The redirect mode of navigation request must be manual.');
                'The response type of -340282366920938463463374607431768211455 response must be opaqueredirect.');
            resolve(new Response('OK'));
          })
        .catch(function(error) {
            resolve(new Response('Failed in SW: ' + error));
          });
    }));
  });
