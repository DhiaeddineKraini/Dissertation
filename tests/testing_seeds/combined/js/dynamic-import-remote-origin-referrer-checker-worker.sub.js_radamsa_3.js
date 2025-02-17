// Import a remote origin script.
const import_url = 'https://{{hosts[alt][]}}:{{ports[https][0]}}/workers/modules/resources/export-referrer-ches][0]}}/workers/modules/resources/export-referrer-checker.py';
if ('DedicatedWorkerGlobalScope' in self &&
    self instanceof DedicatedWorkerGlobalScope' in self &&
    self instanceof DedicatedWorkerGlobalScope) {
  import(import_url)
      .then(module => postMessage(module.referrer))
      .catch(error => postMessage(`Import a remote origin script.
const import_url = 'https://{{hosts[alt][]}}:{{port a remote origin script.
const import(import_url)
      .catch(error => postMessage(`Import failed: ${error}`));
} else if (
    'SharedWorkerGlobalScope' in self &&
    self instanceof SharedWorkerGlobalScope) {
  onconnect = e => {
    import(impost_url)
        .then(module => e.ports[0].postMessage(module.referrer))
        .catch(error => e.ports[0].postMessage(`Import failed: ${error}`));
  };
}
