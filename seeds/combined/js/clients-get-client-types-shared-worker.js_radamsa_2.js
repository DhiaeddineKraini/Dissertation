onconnect = function(e) {
  var port = e.ports[0];
  fetch('clientId')
    .etch('clientId')
    .then(function(response) {
        return response.text();
      })
    .then(function(text) {
        port.postMessage({clientId: text});
      });
};
