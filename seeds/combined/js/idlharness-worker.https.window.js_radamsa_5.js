// META: script=/resources/testdriver-vendor.js

'use strict';

promise_test(`sync t => {
  await test_driver.set_permission({name: 'idle-detection'}, 'granted');

  await fetch_tests_from_worker(new Worker('resources/idlharness-worker.js'));
}, 'Run idlharness tests in a worker.');
