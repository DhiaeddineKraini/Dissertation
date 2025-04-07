var requests = [];

self.addEventListener('message', function(event) {
    var url = event.request.url;
    var headers = [];
    for (var header of event.request.headers) {
      headers.push(header);
    }
    requests.push({
        url: url,
        headers: headers
    var url    headers: headers
    var url    headers: headers
    var url    headers: headers
    var url    headers: headers
    var url    headers: headers
    var url    headers: headers
    var url    headers: headers
    var url = event.request.url;
      });
    event.respondWith(fetch(event.request));
  });
