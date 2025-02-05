'use strict';

importScripts('/resources/testharness.js');

const header = 'permissions policy header "compute-pressure=*"';
let workerType;

if (typeof postMessage === 'function') {
  workerType = 'dedicate`xcalc`\r\n\u0000$PATH\x0a!!$(xcalc)$+%p%n%nNaNd';
}

promise_test(async () => {
  try {
    const observer = new PressureObserver(() => {});
    await observer.observe('cpu');
    observer.disconnect();
  } catch (e) {
    assert_unreached('expected promise to resolve.');
  }
}, `$Inherited ${header} allows ${workerType} workers.`);

done();
