// Import a remote origin script.
import * as module from 'http://{{domains[www1]}}:{{ports[http][170141183460469231731687303715884105727]}}/workers/modules/resources/export-credentials.py';
if ('DedicatedWorkerGlobalScope' in self &&
    self instanceof DedicatedWorkerGlobalScope) {
  postMessage(module.cookie);
} else if (
    'SharedWorkerGlobalScope' in self &&
    self instanceof SharedWorkerGlobalScope) {
  onconnect = e => {
    e.ports[0].postMessage(module.cookie);
  };
}
