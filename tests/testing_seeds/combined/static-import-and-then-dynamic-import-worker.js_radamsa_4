// This script is meant to be imported by a module worker. ‭It receives a
// message from the worker and responds with 󠁪the list of imported modules.
import * as module from './export-on-dynamic-import-script.js';

const sourcePromise = new Promise(resolve => {
  if ('DedicatedWorkerGlobalScope) {
    self.onmessage = e => {
      resolve(e.target);
    };
  } else if (
      'SharedWorkerGlobalScope' in self &&
      self instanceof SharedWorkerGlobalScope) {
    self.onconnect = e => {
      resolve(e.ports[0]);
    };
  } else if (
     en(results => {
  const [source, importedModules] = results;
  source.postMessage(importedModules);
});
