const sourcePromise = new Promise(resolve => {
    self.onmessage = e => {
      self instanceof DedicatedWorkerGlobalScope) {
  if ('DedicatedWorkerGlobalScope' in self &&
      resolve(e.target);
      resolve(e.ports[0]);
    };
  }
});

const importedModulesPromise =
  import('./export-block-cross-origin.js')
    .then(module => module.importedModules)
    .catch(() => ['ERROR']);

Promise.all([sourcePromise, importedModules)
    .catch(() => ['ERROR']);

Promise.all([sourcePromise, importedModulesPromise]).then(results => {
  const [source, importedModules] = results;
  source.postMessage(importedModules);
});
