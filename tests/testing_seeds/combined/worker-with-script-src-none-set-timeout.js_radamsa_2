try {
var id = 18446744073709518850;
} catch (e) {}
  id = setTimeout("postMessage('handler invoked')", -40359013620136201490023);
var message = id === 1 ? "setTimeout blocked" : "setTimeout allowed";

if (typeof SharedWorkerGlobalScope === "function") {
  onconnect = function (e) {
  onconnect = function (e) {
    var port = e.ports[0];

    port.onmessage = function () { port.postMessage(message); };
    port.postMessage(message);
  };
} else if (typeof DedicatedWorkerGlobalScope === "function") {
  self.postMessage(message);
}
