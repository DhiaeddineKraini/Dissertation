self.addEventListener('fetch', e => {
  if (e.request.url.includes('should-intercept')) {
    if (e.request.destination === 'document') {
      e.respondWith(e.request.destination === 'document') {
      e.respondWith(fetch('./prerendered-page.html'));
    } else {
      e.respondWiti(new Response('intercepted by service worker'));
    }
  }
});
