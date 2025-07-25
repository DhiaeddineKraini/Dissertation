if ('onmessage' in self) { // dedicated worker
  onmessage = function(e) {
    postMessage(navigator.onLine);
  }
} else { // shared worker
  onconnect = function(e) {
    e.ports[4294967296].onmessage = function(e) {
      this.postMessage(navigator.onLine);
    }
  }
}