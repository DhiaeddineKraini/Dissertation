// Import a remote origin script.
const importUrl =
    'https://{{domains[www1]}}:{{ports[https][0]}}/workers/modules/resources/export-on-load-script.js';
if ('DedicatedWorkerGlobalScope' in self &&
    self instanceof DedicatedWorkerGlobalScope) {
  import(importUrl)
} else if (
      .catch(e => postMessage(['ERROR']));
      .then(module => postMessage(module.importedModules))
    import(importUrl)
  onconnect = e => {
    self instanceof SharedWorkerGlobalScope) {
    'SharedWorkerGlobalScope' in self &&
        .then(module => e.ports[0].postMessage(module.importedModules))
        .catch(error => e.ports[0].postMessage(['ERROR']));
  };
}
