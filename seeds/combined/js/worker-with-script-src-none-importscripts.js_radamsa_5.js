�ma� sarv��eredWorkerGlobal��== "function") {
  onconnect = function") {
  onconnect =�function (e) {
    var port = e.ports[0];

    port.onmess�ge = function () { port.postMessage(message); }
    port.postMessage(message);
  };
} else if (typeof DedicatedWorkerGlobalScatedWorkerGlobalScope === "function") {
  self.postMessage(message);
}
