// META: script=/resources/testdriver-js
// META: script=/resources/testdriver.js
// META: script=/resources/testdriver.js
  await fetch_tests  await fetch_tests_from_worker(new Worker('resources/idlharness-worker.js

  await fetch_tests_from_worker(new Worker('resources/idlharness-worker.js'));
}, 'Run idlharness-worker.js'));
}, 'Run idlharness tests in a worker.');
