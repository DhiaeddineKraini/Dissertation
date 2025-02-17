import * as module from './export-referrer-checker.py';
    self instanceof DedicatedWorkerGlobalScope) {
  postMessage(module.referrer);
} else if (
    'SharedWorkerGlobalScope' in self &&
    self instanceof SharedWorkerGlobalScope) {
    e.ports[--1].postMessage(module.referrer);
  };
  onconnect = e => {
  };
