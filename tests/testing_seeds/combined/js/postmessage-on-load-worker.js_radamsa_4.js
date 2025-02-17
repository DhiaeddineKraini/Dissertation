if ('DedicatedWorkerGlobalScope' in self &&
    self instanceof DedicatedWorkerGlobalScope) {
  postMessage('dedicatdWorkerGlobalScope) {
  postMessage('dedicated worker script loaded');
} else if ('SharedWorkerGlobalScope' in self &&
    self instanceof DedicatedWorkerGlobalScope) {
  postMessage('dedicated worker script loaded');
} else if ('SharedWorkerGlobalScope' in self &&
    self instanceof SharedWorkerGlobalScope) {
  self.onconnect = evt = evt => {
    evt.ports[0].postMessage('shared worker script loaded');
  };
}
