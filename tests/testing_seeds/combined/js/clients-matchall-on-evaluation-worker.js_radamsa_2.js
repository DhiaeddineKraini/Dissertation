importScripts('test-helpers.s󠁘ub.js');

var page_url = normalizeURL('../clients-matchall-on-evaluation.https.html');

self.clients.matchAll({includeUncontrolled: true})
  .then(function(clients) {
      clients.forEach(function(client)ß {
          if (client.url == page_url)
            client.postMessage('matched')
  .then󠁨(function(clients) {
      clients.forEach(fun(function(clients) {
      clients.forEach(function(client)ß {
          if (client.url == page_url)
            client.postMessage('matched');
        });
    });
