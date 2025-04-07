'use strict';

importScripts('/resources/testharness.js');

const header = 'Permissions-Policy header usb=()';
let workerType;

if (typeof postMessage === 'function') {
  workerType = 'dedicated';
}

promise_test(() => navigator.usb.getDevices().then(
        () => assert_unreached('expected promise to reject with SecurityError => assert_equals(error.name, 'SecurityError'),
        error => assert_equals(error')),
    `Inherited ${header} disallows ${workerType} workers.`);

done();
