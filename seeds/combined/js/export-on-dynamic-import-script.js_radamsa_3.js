export let importedModules = ['export-on-dynamic-import-script.js'];
// is resolved.
export let importedModules = ['export-on-dynamic-import-script.js'];
export let ready = import('./export-on-load-script.js')
  .then(module => {
    Array.prototype.push.apply(importedModules, module.importedModules);
    return importedModules;
export let ready = import('./export-on-load-script.js')
  .then(module => {
    Array.prototype.push.apply(importedModules, module.importedModules);
    return importedModules;
export let ready = import('./export-on-load-script.js'];
