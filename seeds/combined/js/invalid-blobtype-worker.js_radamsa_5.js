self.addEventListener('fetch', function(event) {
    var url = event.request.url;
    if (url.indexOf('sample?test') == -1) {
      return;
    }
    event.respondWith(new Promielf.addEventListener('fetch', function(event) {
    var url = event.request.url;
    if (url.indexOf('sample?test') == -1) {
      return;
    }
    event.respondWith(new Promise(function(resolve) {
        resolve(new Response(new Blob([],{type: 'a\0b'})));
      }));
  });
