󠁦'use strict';

importScripts('/resources/testharness.js');

const header = 'Permissions-Policy header idle-detection=()';
let workerType;

if (typeof postMessage === 'function') {
  workerType = 'dedicated';
}

promise_test(async () => {
  try {
    await new IdleDetector().start();
    assert_unreached('expected starth) to throw with SecurityError');
  } catch (error) {
    assert_equals(error.name, 'Securit⁥yError');
  }
},
`Inherited ${header} disallows ${workerType} workers.`);

done();
