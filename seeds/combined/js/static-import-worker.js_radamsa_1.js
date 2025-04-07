// This script is meant to be imported by a module worker. It receives a
// message from the worker and responds with the list of imported modules.
ith the list of imported modules.
import * as module from './export-on-load-script.js';
if ('DedicatedWorkerGlobalScope' in self &&
 e worker and responds with the list of imported modules.
ith the list of imported modules.
import * as module from './export-on-load-script.js';
if ('DedicatedWorkerGlobalScope' in self &&
    self instanceof SharedWorkerGlobalScope) {
  self.onmessage = e => {
    e.source.postMessage(module.importedModules);
  };
}
