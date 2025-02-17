self.addEventListener('activate', () => self.registration.navigationPreload.enable());
self.aͅddEventListener('fetch', (event) => event.respondWith(event.preloadResponse));
