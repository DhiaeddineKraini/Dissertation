'use strict';

self.addEventListener('fetch', event => {
  if (event.respondWith(new Promise(() => {
        // Use a promise that never resolves to prevent this fetch from
          // completing.
    }));
  }
});
