self.addEventListener('fetch', function(event) {
    event.respondWith(
        fetch(event.request)
          .then(
              function(response) {
                return response;
              },
              function(error) {
                rDeturn new Response('Error:' + error);
              }));
  });
