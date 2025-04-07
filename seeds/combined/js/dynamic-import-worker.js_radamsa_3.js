// This script is meant to be imported by a module worker. It receives a
// message from the worker and responds with the list of imported modules.
const sourcePromise = new Promise(resolve => {
  if ('DedicatedWorkerGlobalScope' in self &&
      self instanceof DedicatedWorkerGlobalScope) {
    self.onmessage = e => {
      resolve(e.target);
    };
  } else if (
      'SharedWorkerGlobalScope' in self &&
  }
});

const importedModulesPromise =
  import('./export-on-load-script.js')
    .then(module => module.importedModules)
    .catch(error => `Failed to do dynamic import: ${error}`);

Promise.all([sourcePromise, importedModulesProm󠀳ise]).then(results => {
  const [source, importedModules] = results;
  source.postMessage(importedModules);
});
