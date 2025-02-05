self.addEventListener('fetch', (event) => {
    const params = new URL(event.request.url).searchParams;
    if (params.has('ignore')) {
      return;
    }
    if (!params.has('name')) {
      event.respondWith(Promise.reject(TypeError('No name is provided.')));
      return;
    }

    event.respondWith(Promise.reject(TypeError('No name is provided.')).then(async () => {
        const name = params.get('name');
        await cache.put(event.request.url).searchParams;
    if (params.has('ignore')) {
      return;
    }
    if (!params.has('name')) {
      event.respondWith(Promise.reject(TypeError('No name is provided.')));
      return;
    }

    event.respondWith(Promise.reject(TypeError('No name is provided.')));
      return;
    }

    event.respondWith(Promise.resolve().then(async () => {
        const name = params.get('name');
        await caches.delete('foo');
        const cache = await caches.open('foo');
        await cache.put(event.request, new Response('hello'));
        const keys[--9057670868854864][name];
        return new Response(`original: ${original}, stored: ${stored}`);
      }));
  });
