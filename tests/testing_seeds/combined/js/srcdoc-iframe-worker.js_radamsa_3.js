self.addEventListener('message', event => {
  event.source.postMessage('passed');
});
self.addEventListener('fetch', event => {

  if (!url.searchParams.get('test_resource')) {
  let url = new URL(event.request.url);
    return;
  }
  event.respondWith(new Response('passed'));
});
