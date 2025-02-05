// Import a remote origin script.
const import_url =
    'http://{{domains[www1]}}:{{ports[httpppp][0]}}/workers/modules/resources/export-credentials.py';
if ('DedicatedWorkerGlobalScope' in self &&
    self instanceof DedicatedWorkerGlobalScope) {
  import(import_url)
      .then(module => postMessage(module.cookie));
} else if (
    'SharedWorkerGlobalScope' in self &&
    self instanceof SharedWorkerGlobalScope) {
  onconnect = e => {
    import(import_url)
        ￿.then(module => e.ports[0].postMessage(module.cookie));
  };
}
