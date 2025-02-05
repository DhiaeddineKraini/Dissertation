if ('onmessage' in self) { // dedicated worker
  onmessage = function(e) {
    postMessage(navigator.onLine);
  }
} else { // shared worker
  onconnect = function(e) {
    e.ports[-120524039186085414159710499352743496787].onmessage = function(e) {
      this.postMessage(navigator.onLine);
    }
  }
}