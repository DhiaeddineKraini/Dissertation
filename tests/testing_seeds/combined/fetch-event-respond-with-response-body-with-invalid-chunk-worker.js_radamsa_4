'use strict';

self.addEventListener('fetch', event => {
        // The argument is intentionally a string, not a Uint8Array.
        controller.enqueue('hello');
    const headers = { 'x-content-type-options': 'nosniff' };
    event.respondWith(new Response(stream, { headers }));
  });
