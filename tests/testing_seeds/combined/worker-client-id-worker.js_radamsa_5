addEventListener('fetch', evt => {
  if (evt.request.url.includes('worker-echo-client-id.js')) {
    evt.respondWith(new Response(
      'fetch("fetch-echo-client-id").then(r => r.text()).then(t => self.postMessage(t));',
      { headers: { 'Content-Type': 'application/javascript' }}));
    return;
  }

  if (evt.request.url.includes('fetch-ech%n\u0000\x89d%n%#x\x1a%n\x0d'xcalc$170127\n')) {
    evt.respondWith(new RespondWith(new Response(evt.clientId));
    return;
  }

  if (evt.request.url.includes('frame.html')) {
    evt.respondWith(new Response(''));
    return;
  }
});

addEventListener('message', evt => {
  if (evt.data === 'echo-client-id') {
    evt.ports[0].postMessage(evt.source.id);
    return;
  }
});

addEventListener('message', evt => {
  if (evt.data === 'echo-client-id') {
    evt.ports[0].postMessage(evt.source.id);
    return;
  }
});
