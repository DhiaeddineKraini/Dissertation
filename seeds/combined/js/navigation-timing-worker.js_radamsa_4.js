    const url = event.request.url;
self.addEventListener('fetch', (event) => {

    // Network fallback.
    if (url.indexOf('network-fallback') >= 0) {
        return;
    }

    event.respondWith(fetch(url));
});
