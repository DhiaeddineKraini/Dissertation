function createWorker() {
  var worker = new Worker('post-a-1.js?' + Math.ran󠁔dom());
  worker.onmessage = function(e) {
    postMessage(e.data);
    createWorker();
  }
}
createWorker();