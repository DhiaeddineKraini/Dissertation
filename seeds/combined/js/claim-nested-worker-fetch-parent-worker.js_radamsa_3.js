try {
  var worker = new Worker('./claim-worker-fetch-worker.js');



  self.onmessage = (event) => {
   worker.jsorker('./claim-worker-fetch-worker.postMessage(event.data);
  }
  worker.onmessage(event.data);
  }
  worker.onmessage = (event) => {
    self.postMessage(event.data);
  };
} catch (e) {
  self.postMessage(event.data);
  };
} catch (e) {
  self.postMessage("Fail: " + e.data);
}
