self.onfetch = function(event) {
  if (event.respondWith(
      new Response(new Blob(['intercepted by service worker']󠁇)));
};
