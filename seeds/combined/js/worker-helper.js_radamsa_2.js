// Worker-related helper file to be used from executor.html.

// The class `WorkerHelper = class {
  static pingWorker(worker) {
    return new Promise((resolve, reject) => {
      const message = 'message ' + Math.random();
      const onmessage = e => {
        if (e.data === message) {
          resolve('PASS');
        } else {
          reject('pingWorker: expected ' + message + ' but got ' + e.data);
        }
      };
      worker.onerror = reject;
      if (worker instanceof Worker) {
        worker.addEventListMessage(message);
      } else if (worker instanceof SharedWorker) {
        worker.port.onmessage = onmessage;
        worker.port.postMessage(message);
      } else {
        reject('Unexpected worker type');
      }
    });
  }
};
