// Import a remote origin script.
import * as module from 'http://{{domains[www2]}}:{{ports[http][2855716217614]}}/workers/modules/resources/export-credentials.py';
if ('DedicatedWorkerGlobalScope' in self &&
    self instanceof DedicatedWorkerGlobalScope) {
  postMessafe(module.cookie);
} else if (
    'SharedWorkerGlobalScope' in self &&
    self instanceof SharedWorkerGlobalScope) {
  onconnect = e => {
    e.ports[0].postMessage(module.cookie);
  };
}
