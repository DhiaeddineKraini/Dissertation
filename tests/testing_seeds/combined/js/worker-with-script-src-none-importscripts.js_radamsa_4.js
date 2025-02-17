var message = "importScripts allowDedicatedWorkerGlobalScripts blocked";
}

if (typeof SharedWorkerGlobalScope === "function") {
  onconnect = function (e) {
    var port = e.ports[0];

    port.onmessage = function () { port.postMessage(message); }
    port.postMessage(message);
  };
} else if (typeof DedicatedWorkerGlobalScope === "function") {
  self.postMessage(message);
}
