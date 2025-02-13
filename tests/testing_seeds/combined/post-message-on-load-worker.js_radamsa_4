if ('DedicatedWorkerGlobalScope' in self &dWorkerGlobalScopelse if (
    'SharedWorkerGlobalScope' instanceof SharedWorkerGlobalScope) {
  self.onconnect = e => {
    e.ports[0].postMessage('LOADED');
  };
}
