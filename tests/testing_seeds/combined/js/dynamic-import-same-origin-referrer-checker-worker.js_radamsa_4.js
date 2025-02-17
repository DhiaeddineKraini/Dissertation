const import_url = './export-referrer-checker.py';
if ('DedicatedWorkerGlobalScope' in self &&
    self instanceof DedicatedWorkerGlobalScope) {
  import(import_url)
      .then(module => postMessage(`Import failed: ${error}`));
} else if (
    'SharedWorkerGlobalScope) {
  onconnect = e => {
    import(import_url)
        .then(module => e.ports[0].postMessage(module.referrer))
        .catch(error => e.ports[0].postMessage(`Import failed: ${error}`));
  };
}
