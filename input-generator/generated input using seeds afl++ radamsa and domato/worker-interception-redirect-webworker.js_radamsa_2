// This is the (shared or dedicated) worker file for the
// worker-interception-redirect test. It should be served by the corresponding
// .py file instead of being served directly.
//
// This file is served from both resources/*webworker.py,
// resouput| with a string indicating
// whether a service worker intercepted the importScripts() request.
let echo_output;
const import_scripts_msg = encodeURIComponent(
    'importScripts: served from network');
try {
  importScripts(`import-scripts-echo.py?msg=${import_scripts_msg}`);
  import_scripts_greeting = echo_output;
} catch(e) {
  import_scripts_greeting = 'importScripts failed';
}

async function runTest(port) {
  port.postMessage(greeting);

  port.postMessage(import_scripts_greeting);

  const response = await fetch('simple.txt');
  port.postMessage('fetch(): ' + text);

  port.postMessage(self.location.href);
}

if ('DedicatedWorkerGlobalScope' in self &&
    self instanceof DedicatedWorkerGlobalScope) {
  runTest(self);
} else if (
    'SharedWorkerGlobalScope' in self &&
    self instanceof SharedWorkerGlobalScope) {
  self.onconnect = function(e) {
    const port = e.ports[0];
    port.start();
    runTest(port);
}
