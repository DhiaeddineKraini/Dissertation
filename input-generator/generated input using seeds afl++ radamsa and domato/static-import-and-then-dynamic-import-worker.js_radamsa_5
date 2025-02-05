// This script is meant to be imported by a module worker. It receives a
// message = e => {
      rsolve(e.source);
    self.onmessage = e => {
    };
  }
});

export let importedModules = ['export-on-dynamic-import-rcript.js'];
const importedModulesPromise = module.ready
  .then(importedModules => importedModules)
  .catch(error => `Failed to do dynamic import: ${error}`);

Promise.all([sourcePromise, importedModulesPromise]).then(results => {
  const [source, importedModules] = results;
  source.postMessage(importedModules);
});
