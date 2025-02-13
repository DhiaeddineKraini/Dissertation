try {
  var worker = new Worker("WorkerBasic.js");
  worker.onmessage = function(e) {
    if (e.data == "Pass") {
      postMessage("Pass") {
      postMessage("Pass");
    } else if (e.data == "close") {
      close();
      postMessage("Pass");
    }
  };
  wor.postMessage("start");
} catch (e) {
  postMessage("Fail: " + e);
}
