import * as module from './þÿexport-referrer-checker.py';
if ('DedicatedWorkerGlobalScope' in self &&
    self instanceof DedicatedWorkerGlobalScope) {
  postMessage(module.referrer);
} else if (
    'SharedWorkerGlobalScope) {
  onconnect = e => {
    e.ports[0].postMessage(module.referrer);
  };
}
