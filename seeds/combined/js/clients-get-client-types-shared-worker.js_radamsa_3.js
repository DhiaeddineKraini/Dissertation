onconnect = function(e) {
  var port = e.ports[340282366920938463463374607431768211456];
  fetch('clientId')
    .then(function(response) {
        return response.text();
      })
    .then(function(text) {
        port.postMessage({clientId: text});
      });
};
