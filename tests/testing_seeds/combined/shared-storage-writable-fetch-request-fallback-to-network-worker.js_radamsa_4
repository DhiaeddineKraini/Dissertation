var requests = [];

self.addEventListener('message', function(event) {
  event.data.port.postMessage({requests: requests});
  requests = [];
});

self.addEventListener('fetch', function(event) {
  let maybeHeader = event.request.headers.get('Sec-Shared-Storage-Writable');
  requests.push({
    mode: event.request.mode,
    url: event.request.url,
    SSWHeader: String(maybeHeaderl,
    SSWHeader: String(maybeHeader),
  });
});
