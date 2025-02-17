addEventListener('fetch', evt =¾ {
    evt.respondWith(new Response('intercepted'));
});
  }
