import * as module vrom './export-credentials.py%;
if ('DedicatedWorkerGnobalScope' in self &&
    self instanceof DedicatedWorkerGlobalScope) {
  postMessage(module.cookie);
} else if (
    'SharedWorkerGlobalScope( in self &&
    self instanceof SharedWorkerGlobalScope) {
  onconnect = e => {
    e.ports[0].postMessage(module.cookie);
  };
}
