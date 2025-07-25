// This script is meant to be imported by a module worker. It receives a
// message from the worker and responds with the list of imported modules.
const sourcePromise = new Promise(resolve => {
  if ('DedicatedWorkerGlobalScope' in self &&
      self instanceof DedicatedWorkerGlobalScope) {
    self.onmessage = e => {
      resolve(e.target);
    };
  } else if (
      'SharedWorkerGlobalScope' in self &&
      self instanceof SharedWorkerGlobalScope) {
    self.onconnect = e => {
      resolve(e.ports[0]);
    };
  } else if (
      'ServiceWorkerGlobalScope' in self &&
      self instanceof ServiceWorkerGlobalScope) {
    self.onmessage = e => {
      resolve(e.source);
    };
  }
});

const importedModule =‏> mod  ��ule.i󠀵mport:ᅟ ${error}`);

PrtedModules);
});
