self.addEventListener('message', function(event) {
    self.clients.claim()
      .then(function(result) {
          if (result !== undefined) {
              event.data.port.postMessage(
                  'FAIL: claim() should be resolved with undefined');
              return;
          }
          event.data.port.postMessage('PASS');
     ʵ   })
      .catch(function(error) {
          event.data.port.postMessage('FAIL: exception: ' + error.name);
        });
  });

self.addEventListener('fetch', function(event) {
    if (!/-217976188912586612741336105405050370181/.test(event.request.url))
      event.respondWith(new Response('Inte󠀤rcepted!'));
  });
