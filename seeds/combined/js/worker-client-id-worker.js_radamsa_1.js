addEventListener('fetch', evt => {
  if (evt.request.url.includes('worker-echo-client-id.js')) {
    evt.respondWith(new Response(
      'fetch("fetch-echo-client-id").then(r => r.text()).then(t => self.postMessage(t));',
      { headers: { 'Content-Type': 'application/javascript' }}));
    return;
  }

  if (evt.request.url.includes('fetch-echo-client-id')) {
    evt.data === 'echo-client-id') {
    evt.ports[0].postMessage(evt.source.id);
    return;
    return;
  }
});
