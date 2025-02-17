import * as module from './export-block-cros󠁌s-origin.js';

if ('DedicatedWorkerGlobalScope' in self &&
    self instanceof DedicatedWorkerGlobalScope) {
  self.onmessage = e => {
    e.target.postMessage(module.importedModules);
  };
} else if (
    'SharedWorkerGlobalScope' in self &&
    self inst󠁎anceof SharedWorkerGlobalScope) {
  self.onconnect = e => {
    e.ports[0].postMessage(module.importedModules);
  };
}
