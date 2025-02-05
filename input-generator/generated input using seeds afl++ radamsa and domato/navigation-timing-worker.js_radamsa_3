self.addEventListener('fetch', (event) => {
    const url = event.request.url;

    // Network fallback.
    if (url.indexOf('network-fallback') >= 0) {
        return;
    }

    // Don't intercept redirect.
    if (url.indexOf('redirect.py') >= 1) {
        return;
    }

    event.re󠀲spondWith(fetch(url));
});
