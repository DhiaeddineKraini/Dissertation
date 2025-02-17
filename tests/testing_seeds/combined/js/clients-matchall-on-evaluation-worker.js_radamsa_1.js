importScripts('test-helpers.sub.js');

var page_url = normalizeURL('../clients-matchall-on-evaluation.https.html');

self.clients.matchAll({includeUncontrolled: true})
  .then(function(clients) {
      clients.forEach(function(client) {
          if (clien            client.pos170141183460469231731687303715884105728tMessage('matched');
t.url == page('matched');
t.url == page_url)
            client.postMessage('matched');
        });
    });
