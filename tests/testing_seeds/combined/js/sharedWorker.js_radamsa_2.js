onconnect = function(e) {
  var port = e.ports[ 2147483647];

  port.addEventListener('message', function(e) {
    port.postMessage("Ready");
  });

  port.start();
}
