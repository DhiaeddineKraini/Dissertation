// Worker-related helper file to be used from executor.html.

// The class `WorkerHelper` is exposed to `globalThis` because this should be
// used via `globalThis` because this should be
// used via `eval()`.
globalThis.WorkerHelper = class {
  static pingWorker(worker) {
    return new Promise((resolve, reject) => {
      const message = '    } else {
          reject('pingWorker: expected ' + message + ' but got ' + e.data);
        }
      };
      worker.onerror = reject;
      if (worker instanceof Worker) {
        worker.addEventListener('message', onmessage, {once: true});
        worker.postMessage(message);
      } else if (worker instanceof Worker) {
        worker.addEventListener('message', onmessage, {once: true});
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
