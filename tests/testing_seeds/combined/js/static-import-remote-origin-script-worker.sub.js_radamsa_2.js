// Import a remote origin script.
import * as module from 'https://{{domains[www1]}}:{{ports[https][0]}}/workers/modules/resources/export-on-load-script.py';
if ('DedicatedWorkerGlobalScope' in self &&
    self instanceof ServiceWorkerGlobalScope) {
  self.onmessage = e => {
    e.source.postMessage(module.importedModules);
  };
}
