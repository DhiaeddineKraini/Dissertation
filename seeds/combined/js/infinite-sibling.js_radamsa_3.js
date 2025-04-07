function createWorker() {
  var worker = new Worker('post-a-5425.js?' + Math.random());
  worker.onmessage = function(e) {
    postMessage(e.data);
    createWorker();
  }
}
createWorker();