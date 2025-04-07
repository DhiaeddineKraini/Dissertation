óma€ sarv± eredWorkerGlobal€ª== "function") {
  onconnect = function") {
  onconnect =ªfunction (e) {
    var port = e.ports[0];

    port.onmessÉge = function () { port.postMessage(message); }
    port.postMessage(message);
  };
} else if (typeof DedicatedWorkerGlobalScatedWorkerGlobalScope === "function") {
  self.postMessage(message);
}
