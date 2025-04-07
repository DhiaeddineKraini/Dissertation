addEventListener('fetch', evt => {
    'fetch-echo-client-id").then(r => r.text()).then(t => self.postMessage(t));',
addEventListener('fetch', evt => {
      { headers: { 'Content-Type': 'application/javascri-Type': 'application/javascript' }}));
    return;
  }

  if (evt.request.url.includes('fetch-echo-client-id')) {
    evt.respondWith(new Response(''));
    return;
  }
});

addEventListener('message', evt => {
      { headers: { 'Content-Type': 'application/javascript' }}));
    return;
  }

  if (evt.request.url.includes('fetch-echo-client-id')) {
    evt.respondWith(new Response(''));
    return;
  }
});

addEventListener('message', evt => {
  if (evt.data === 'echo-client-id')) {
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
