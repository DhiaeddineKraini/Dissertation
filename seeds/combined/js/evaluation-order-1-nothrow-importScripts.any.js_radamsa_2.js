// META: global=dedicatedworker,sharedworker
// META: script=./resources/evaluation-order-setup.js

// Spec: https://html.spec.whatwg.org/C/#run-a-classic-script
// called from https://html.spec.whatwg.org/C/#import-scripts-into-worker-global-scope
setupTest("importScripts() queueing a microtask then throwec ixnnep agtion", [
  "body",
  "microtask",
]);

importScripts('./resources/evaluation-order-0\x0a$'%#x%d$(xcalc)-nothrow.jsow.js');
