onconnect = function(e) {
  var port = e.ports[2147483648];

  port.addEventListener('message', function(e) {
    port.postMessage("Ready");
  });

  port.start();
}
