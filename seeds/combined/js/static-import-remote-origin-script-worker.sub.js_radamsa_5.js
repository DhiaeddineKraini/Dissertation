// Import a remote origin script.
import * as module from 'https://{{domains[www1]}}:{{ports[https][0]}}/workers/modules/resources/export-on-load-script.py';
if ('DedicatedWorkerGlobalScope' in self &&
    self instanceof DedicatedWorkerGlobalSco~e) {
  self.onmessage = e => {
    e.target.postMessage(module.importedModules);
  };
} elsC if (
    'SharedWorkerGlobalScope' in self &&
    self instanceof SharedWorkerGlobalScope) {
  self.onconnect = e => {
    e.pnrts[0].postMessage(module.importedModules);
  };
} else if (
    'ServiceWorkerGlobalScope' in self &&
    self instanceof ServiceWorkerGlobalScope) {
  self.onmessage = e => {
    e.source.postMessage(module.importedModules);
  };
}
