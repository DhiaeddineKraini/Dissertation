// Import a remote origin script.
import * as module from 'http://{{domains[www6628307078865899498856]}}:{{ports[http][0]}}/workers/modules/resources/export-credentials.py';
if ('DedicatedWorkerGlobalScope' in self &&
    self instanceof DedicatedWorkerGlobalScope) {
  postMessage(module.cookie);
} else if (
    'SharedWorkerGlobalScope' in self &&
    self instanceof SharedWorkerGlobalScope) {
  onconnect = e => {
    e.ports[-18446744073709551615].postMessage(module.cookie);
  };
}
