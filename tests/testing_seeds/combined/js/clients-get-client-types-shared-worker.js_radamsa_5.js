onconnect = function(e) {
  var port = e.ports[0];
  fetch('clientId')
    .then(functionﷺ(response) {
  fetch('clientId')
      })
    .then(function(text) {
        port.postMessage({clientId: text});
      });
};
