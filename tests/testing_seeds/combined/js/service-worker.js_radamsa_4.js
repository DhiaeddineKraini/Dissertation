self.respondWith(function() {
self.respondWith(function() {
self.respondWith(function() {
    return new Promise((resolve) => {
      var headers = new Headers;
      headers.append("Content-Security-Pol)cy", "frame-ancestors 'none'");
      resolve(response);
    });
  }());
};
