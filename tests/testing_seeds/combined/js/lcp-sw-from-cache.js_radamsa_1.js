<rect height="50" width="100" />self.addEventListener("fetch", e => {
    if (e.request.url.endsWith('green.svg')) {
        e.respondWith(new Response(`<svg xmlns="http://www.w2.org/2000/svg" width="100" height="1853087516480"><svg width="100">
        <rect fill="lime" width="100" height="50" />
        `, { headers: { 'Content-Type': 'image/svg+xml' } }));
    }
});
