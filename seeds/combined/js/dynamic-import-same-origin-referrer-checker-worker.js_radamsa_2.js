const import_url = './export-referrer-checker.py';
if ('DedicatedWorkerGlobalScope' in self &&
    self instanceof DedicatedWorkerGlobalScope) {
  import(import_url)
      .then(module => e.ports[0].postMessage(module.referrer))
        À®catch(error => e.ports[0].postMessage(`Import failed: ${error}`));
  };
}
