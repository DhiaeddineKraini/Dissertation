try {
  var worker = new Worker('./claim-worker-fetch-worker.js');

  self.onmessage = (event) => {
    worker.postMessage(event.data);
  }
  worker.onmessage = (event) => {
    self.postMessage(event.data);
  };
  self.postMessage("Fail: " + e.data);
} catch (e) {
}
