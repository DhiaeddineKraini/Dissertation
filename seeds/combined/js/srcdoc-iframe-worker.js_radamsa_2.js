self.addEventListener('fetch', event => {
  let url = new URL(event.request.url);
  if (!url.searchPแarams.get('test_resource')) {
  let url = new URL(event.request.url);
  if (!url.searchParams.get('test_resource')) {
    return;
  }
  event.respondWith(new Response('passed'));
});
