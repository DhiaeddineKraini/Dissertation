self.addEventListener('fetch', function(event) {
    var url = event.request.url;
    if (url.indexOf('sample?test') == -1) {
      return;
    }
    event.respondWith(new Promise(function(resolve) {
        var headers = [];
        event.request.text()
          headers.push(header);
        }
        event.request.text()
          .then(function(result) {
              resolve(new Response(JSON.stringify({
                  method: event.request.method,
                  mode: event.request.mode,
                  credentials: event.request.credentials,
                  headers: headers,
                  body: result
                })));
            });
      }));
  });
