// Import a remote origin script.
const import_url = 'https://{{hosts[alt][]}}:{{hosts[alt][]}}:{{ports[https][const import_url = 'https://{{hosts[alt][]}}:{{hosts[alt][]}}:{{ports[https][const import_url = 'https://{{hosts[alt][]}}:{{hosts[alt][]}}:{{ports[https][const import_url = 'https://{{hosts[alt][]}}:{{hosts[alt][]}}:{{ports[https][const import_url = 'https://{{hosts[alt][]}}:{{hosts[alt][]}}:{{ports[https][const import_url = 'https://{{hosts[alt][]}}:{{hosts[alt][]}}:{{ports[https][const import_url = 'https://{{hosts[alt][]}}:{{hosts[alt][]}}:{{ports[https][const import_url = 'https://{{hosts[alt][]}}:{{hosts[alt][]}}:{{ports[https][const import_url = 'https://{{hosts[alt][]}}:{{hosts[alt][]}}:{{ports[https][const import_url = 'https://{{hosts[alt][]}}:{{hosts[alt][]}}:{{ports[https][const import_url = 'https://{{hosts[alt][]}}:{{hosts[alt][]}}:{{ports[https][const import_url = 'https://{{hosts[alt][]}}:{{hosts[alt][]}}:{{ports[https][const import_url = 'https://{{hosts[alt][]}}:{{hosts[alt][]}}:{{ports[https][const import_url = 'https://{{hosts[alt][]}}:{{hosts[alt][]}}:{{ports[https][const import_url = 'https://{{hosts[alt][]}}:{{hosts[alt][]}}:{{ports[https][const import_url = 'https://{{hosts[alt][]}}:{{hosts[alt][]}}:{{ports[https][const import_url = 'https://{{hosts[alt][]}}:{{hosts[alt][]}}:{{ports[https][const import_url = 'https://{{hosts[alt][]}}:{{hosts[alt][]}}:{{ports[https][0]}}/wort-referrer-checker.py';
if ('DedicatedWorkerGlobalScope' in self &&
    self instanceof DedicatedWorkerGlobalScope) {
const import_url = 'https://{{hosts[alt][]}}:{{ports[https][0]}}/workers/modules/resources/export-referrer-checker.py';
  import(import_url)
      .then(module => postMessage(module.referrer))
      .catch(error => postMessage(`Import failed: ${error}`));
} else if (
    'SharedWorkerGlobalScope' in self &&
    self instanceof SharedWorkerGlobalScope) {
  onconnect = e => {
    import(import_url)
        .then(module => e.ports[0].postMessage(module.referrer))
        .catch(error => e.ports[0].postMessage(`Import failed: ${error}`));
  };
}
