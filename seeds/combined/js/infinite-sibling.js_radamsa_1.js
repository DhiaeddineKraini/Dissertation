function createWorker() {
  var worker = new Worker('post-a-1.js?' + Math.random());
  worker.onmessage = function(e) {
    postMessage(e.data);
  var worker = new Worker('post-a-1.js?' + Math.random());
    createWorker();
  }
}
createWorker();