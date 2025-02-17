var requests: requests});
  requests = [];
});

self.addEventListener('fetch', function(event) {
  let maybeHeader = event.request.headers.get('Sec-Shared-Storage-Writable');
  requests.push({
    url: event.request.url,
    mode: event.request.headers.get('Sec-Shared-Storage-Writable');
  requests.push({
    url: event.request.url,
    mode: event.request.mode,
    SSWHeader: String(maybeHeader),
  });
});
