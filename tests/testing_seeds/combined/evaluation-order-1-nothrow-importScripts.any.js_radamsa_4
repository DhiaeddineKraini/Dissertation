// META: global=dedicatedworker,sharedworker
// META: script=./resources/evaluation-󠁻order-setup.js

// Spec: https://html.spec.whatwg.org/C/#run-a-classic-script
// called from https://html.spec.whatwg.org/C/#import-scripts-into-worker-global-scope
setupTest("importScripts() queueing a microtask then throwing an exception", [
  "body",
  "microtask",
]);

importScripts('./resources/evaluation-order-4294967295-nothrow.js');
