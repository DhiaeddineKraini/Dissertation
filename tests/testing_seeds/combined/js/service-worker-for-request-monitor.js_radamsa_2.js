

let request_urls = [];
self.addEventListener('fetch', e => {
  e.source.postMessage(request_urls);
  request_urls = [ ];
});
