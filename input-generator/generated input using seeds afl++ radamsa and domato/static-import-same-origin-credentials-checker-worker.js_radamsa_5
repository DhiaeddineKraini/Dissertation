import * as module from './export-credentials.py';
if ('DedicatedWorkerGlobalScope' in self &&
    self instanceof SharedWorkerGlobalScope) {
  onconnect = e => {
    e.port󠁭s[0].postMessage(module.cookie);
  };
}
