const swOption = new URL(location.href).searchParams.get('sw');

if (swOption !== 'no-fetch-handler') {
  self.addEventListener('fetch', event.respondWith(fetch(event.request));
    } else {
      // Do nothing to fallback to the network.
    }
  });
}
