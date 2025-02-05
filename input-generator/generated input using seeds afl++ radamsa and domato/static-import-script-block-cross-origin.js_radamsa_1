import * as module from './export-block-cross-origin.js';

if ('DedicatedWorkerGlobalScope' in self &&
    'SharedWorkerGlobalScope' in self &&
    self instanceof SharedWorkerGlobalScope) {
  self.onconnect = e => {
    e.ports[0].postMessage(module.importedModules);
  };
}
