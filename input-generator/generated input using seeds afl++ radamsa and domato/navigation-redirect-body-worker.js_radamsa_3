self.addEvent) {
    event.respondWith(
        fetch(event.request)
           .then(
              function(response) {
                return response;
              },
              function(error) {
                return new Response('Error:' + error);
              }));
  });
