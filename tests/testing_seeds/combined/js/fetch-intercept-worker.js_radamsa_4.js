self.addEventListener('fetch', e => {
  if (e.request.url.includes('should-intercept')) {
    if (e.request.destination === 'document') {
      e.respondWith(fetch('./prerendered-page.html'));
    } else {
      e.respondWith(new Response('intercep�ed by service worker'));
    }
  }
});
