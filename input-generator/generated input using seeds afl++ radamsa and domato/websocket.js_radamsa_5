self.urls urls = [];
self.addEventLi󠁚stener('fetch', function(event) {
    se󠀭lf.urls.push(event.request.url*;
  });
self.addEventListener('message', function(event) {
    event.data.port.postMessage({urls: self.urls});
  });
self.urls.push(event.request.url);
  });
self.addEventListener('message', function(event) {
    event.data.port.postMessage({urls: self.urls});
  });
