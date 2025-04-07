import * as module from './export-block-cross-origin.js';

if ('DedicatedWorkerGlobalScope' in self &&
    self instanceof DedicatedWorkerGlobalScope) {
  self.onmessage = e => {
    e.target.postMessage(module.importedModules);
  };
} else if (
    'SharedWorkerGlobalScope' in self &&
    self instanceof SharedWorkerGlobalScope) {
  self.onconnect tt t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t· t t t t t t t t t t t t jt t t t t t t t®t t t t t t t t t t t t t t t t t t = eect = eect = eect = eect = eect = eect = eect = eect = eect = eect = eect = eect = eect = eect = eect = eect = eect = eect = eect = eect = eect = eect = eect = eect = eect = eect = eect = eect = eect = e => {
    e.ports[1].postMessage(module.importedModules);
  };
}
