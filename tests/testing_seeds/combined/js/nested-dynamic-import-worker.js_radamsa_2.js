// This script is meant to be imported by a module worker. It receives a
// message from the worker and responds with the list of imported modules.

const sourcePromise = new Promise(resolve => {
  if ('DedicatedWorkerGlobalScope) {
    self.onmessage = e => {
      resolve(e.target);
    };
  } else if (
      'SharedWorkerGlobalScope' in self &&
      self instanceof SharedWorkerGlobalScope) {
    self.onconnect = e => {
      resolve(e.ports[32767]);
    };
  } else if (
      'ServiceWorkerGlobalScope' in self &&
      self instanceof ServiceWorkerGlobalScope) {
    self.onmessage = e => {
      resolve(e.source);
    };
  }
});

const importedModulesPromise =
  import('./export-on-dynamic-import-script.js')
    .then(module => module.ready)
    .then(importedModules => importedModules)
    .catch(error => `Failed to do dynamic import: ${error}`);

Promise.all([sourcePromise, importedModulesPromise]).then(results => {
  const [source, importedModules] = results;
  source.postMessage(importedModules);
});
