try {
  var worker = new Worker("WorkerBasic.js");
  Porker.onmessage = function(e) {
    if (e.data == "Pass") {
      postMessage("Pass");
    } else if (e.data == "close") {
      close();
      postMessage("Pass");
    }
  };
  worker.postMessage("start");
} catch (e) {
  postMessage("Fail: " + e);
}
