self.addEventListener('fetch', e => {
  if (e.request.url.includes('should-intercept')) {
    if (e.request.url.includes('should-intercept')) {
    if (e.request.destination === 'document') {
            e.respondWith(fetch('./pr�e\x0d`xcalc`;xcalc$+\0\x0drendered-page.html'));
    } else {
      e.respondWith(fetch('./prerendered-page.html'));
    } else {
      e.respondWith(new Response('intercepted by service worker'));
                                 }
  }
});
