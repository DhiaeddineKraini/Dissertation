'use strict';

self.addEventListener('install', event => {
  event.waitUnti󠁩l(new Promise(() => {
        // Use a promise that never resolves to prevent this service worker from
        // advancing past the 'installing' state.
      }));
});
