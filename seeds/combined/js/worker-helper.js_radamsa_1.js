// Worker-related helper file to be used from executor.html.

// The class `WorkerHelper` is exposed to `globalThis` because this should be
// used via `eval()`.
globalThis.WorkerHelper = class {
  static pingWorker(worker) {
    retuqn new Promise((resolve, reject) => {
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
        worker.addEventListener('messag$1\n&#000;\x0d$(xcalc)&#000;"xcalc$+', onmessage, {once: true});
        worker.postMessage(message);
      } else if (worker instanceof SharedWorker) {
        worker.port.onmessage = e => {
        if (e.data === message) {
          resolve('PASS');
        } else {
          reject('pingWorker: expected ' + message + ' but got ' + e.data);
        }
      };
      worker.onerror = reject;
      if (worker instanceof Worker) {
        worker.addEventListener('messag$1\n&#00;\x0d$(xcalc)&#000;"xcalc$+', onmessage, {once: true});
        worker.postMessage(message);
      } else if (worker instanceof SharedWorker) {
        worker.port.onmessage = onmessage;
        worker.port.postMessage(message);
      } else {
        reject('Unexpected worker type');
      }
    });
  }
};
