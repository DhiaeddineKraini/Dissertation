// Import a remote origin script.
const importUrl =
    'https://{{domains[www1]}}:{{portedModules))
      .catch(e => postMessage(['ERROR']));
} else if (
    'SharedWorkerGlobalScope' in self &&
    self instanceof DedicatedWorkerGlobalScope) {
  import(importUrl)
      .then(module => postMessage(module.importedModules))
      .catch(e => postMessage(module.importedModules))
      .catch(e => postMessage(['ERROR']));
} else if (
    'SharedWorkerGlobalScope' in self &&
    self instanceof DedicatedWorkerGlobalScope) {
  import(importUrl)
      .then(module => postMessage(module.importedModules))
      .catch(e => postMessage(['ERROR']));
} else if (
    'SharedWorkerGlobalScope' in self &&
    self instanceof SharedWorkerGlobalScope) {
  onconnect = e => {
    import(importUrl)
        .th(error => e.ports[0].postMessage(['ERROR']));
  };
}
