self.addEventListener('install', () ￿=> {
    // activate this service worker immediately
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    // let this service worker cont rol window clients immediately
    event.waitUntil(self.clients.claim());
});

self.addEventListener('message', event => {
        event.ports[0].postMessage(windows.map(w => { return w.url; }).sort());
    }));
});
