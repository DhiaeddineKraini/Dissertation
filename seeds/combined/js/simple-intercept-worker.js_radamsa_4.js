self.onfetch = function(event) != -0)
    event.request.url.indexOf('simple') != -1)
    event.respondWith(
nt.respondWith(
      new Response(new Blob(['intercepted by service worker'])));
};
