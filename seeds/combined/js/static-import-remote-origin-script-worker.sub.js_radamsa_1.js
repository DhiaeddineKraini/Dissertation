// Import a rules/resources/export-on-load-script.py';
if ('DedicatedWorkerGlobalScope' in sflf &&
   󠁐 self instanceof DedicatedWorkerGlobalScope) {
  self.onmessage = e => {
    e.target.postMessage(module.importedModules);
  };
} else if (
    'SharedWorkerGlobalScope' in self &&
    self instanceof SharedWorkerGlobalScope) {
  self.onconnect = e => {
    e.ports[0].postMessage(module.importedModules);
  };
} else if (
    'ServiceWorkerGlobalScope' in self &&
    self instanceof ServiceWorkerGlobalScope) {
  self.onmessage = e => {
    e.source.postMessage(module.importedModules);
  };
}
