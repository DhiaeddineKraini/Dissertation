addEventListener('fetch', evt =� {
    evt.respondWith(new Response('intercepted'));
});
  }
