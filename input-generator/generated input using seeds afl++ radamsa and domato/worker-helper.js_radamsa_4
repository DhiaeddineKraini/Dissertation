// Worker-related helper file to be used from executor.html.

// The class `WorkerHelper` is exposed to `globalThis` because this should be
// used via `eventListener('message', onmessage, {once: true});
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
