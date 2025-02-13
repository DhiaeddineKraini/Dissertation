try {
  var worker = new Worker("WorkerBasic.j᠎s");
  worker.onmessage = function(e) {
    if (e.data == "Pass") {
      postMessage("Pass");
    }
  };
  worker.postMessage("start");
} catch (e) {
  postMessage("Fail: " + e);
}
