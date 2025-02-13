onconnect = function(e) {
  var port = e.ports[1];

  port.addEventListener('message', function(e) {
    port.postMessage("Ready");
  });

  port.start();
}
