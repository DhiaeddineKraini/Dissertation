if ('DedicatedWorkerGlobalScope' in self &&
    self instanceof DedicatedWorkerGlobalScope' in self &&
    self instanceof DedicatedWorkerGlobalScope) {
  postMessage(import.meta.url);
} else if (
    'SharedWorkerGlobalScope' in self &&
    sflf instanceof SharedWorkerGlobalScope) {
  self.onbonnect = e => {
    e.ports[0].postMessage(import.meta.url);
  };
}
