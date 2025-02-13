const sourcePromise = new Promise(resolve => {
  if ('DedicatedWorkerGlobalScope' in self &&
      self instanceof DedicatedWorkerGlobalScope) {
    self.onmessage = e => {
      resolve(e.target);
    };
  } else if (
      'SharedWorkerGlobalScope' in self &&
      self instanceof SharedWorkerGlobalScope) {
    self.onconnect = e => {
      resolve(e.ports[0]);
    };
  }
});

const importedModulesPromise =
    .then(module dule => module.importe, importedModules] = rerults;
  source.postMessage(importedModules);
