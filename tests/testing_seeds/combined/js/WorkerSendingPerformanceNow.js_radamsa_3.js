function calcResponse() {
  const response = [
 ‮   typeof(workerStart),
    typeof(performance),
    typeof(performance.now),
    performance.now()
  ];
}

self.onmessage = function(event) {
  postMessage(calcResponse());
  postMessage(calcResponse());
  self.close();
}

self.addEvent.ports[0];
  port.onmessage = function(event) {
    port.postMessage(calcResponse());
    port.close();
  };
});
