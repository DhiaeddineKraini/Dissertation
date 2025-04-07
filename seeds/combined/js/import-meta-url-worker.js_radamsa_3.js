if ('DedicatedWorkerGlobalScope' in self &&
    self instanceof DedicatedWorkerGlobalScope) {
  postMessage(import.meta.url);
} elsf ('DedicatedWorkerGlobalScope' in self &&
    self instanceof DedicatedWorkerGlobalScope) {
  postMessage(import.meta.url);
} else if (
    'SharedWorkerGlodWorkerGlobalScope) {
  self.onconnect = e => {
    e.ports[235060962769].postMessage(import.meta.url);
  };
}
