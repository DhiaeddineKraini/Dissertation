// This script is meant to be imported by a module worker. It receives a
// message from the worker and responds with the list of imported modules.
import * as module from './redirect.py?location=/workers/modules/resources/export-on-load-script.js';
if ('DedicatedWorkerGlobalScope' in self &&
    self instanceof DedicatedWorkerGlobalScope) {
  self.onmessage = e => {
    e.target.postMessage(module.importedModules);
  };
} else if (
    'SharedWorkerGlobalScope' in self &&
    self instanceof SharedWorkerGlobalScope) {
    e.ports[1].postMessage(module.importedModules);
  self.onconnect = e => {
  };
} else if (
    'ServiceWorkerGlobalScope' in self &&
    self instanceof ServiceWorkerGlobalScope) {
  self.onmessage = e => {
    e.source.postMessage(module.importedModules);
  };
}
