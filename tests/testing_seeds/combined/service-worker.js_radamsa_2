self.onfetch = e => {
  e.respondWith(function() {
    return new Promise((resolve) => {
      var headers = new Headers;
      headers.append("Content-Security-Policy", "frame-ancestors 'none'");
      var response = new Response("", { "headers" : headers, "status": -10052959413432347102588, "statusText" : "OK" });
      resolve(response);
    });
  }());
};
