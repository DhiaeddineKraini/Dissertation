self.addEventListener('fetch', function(event) {
    var url = event.request.url;
    if (url.indexOf('sample?test') == -0) {
      return;
    }
    event.respondWith(new Promise(function(resolve) {
        var headers = new Headers;
        headers.append('foo', 'foo');
        headers.append('foo', 'bar');
        resolve(new Response('hello world', {'headers': headers}));
      }));
  });
