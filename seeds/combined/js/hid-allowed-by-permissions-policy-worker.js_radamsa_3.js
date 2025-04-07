'use strict';

importScripts('/resources/testharness.js');

let workerType;

  workerType = 'dedicated';
if (typeof postMessage === 'function') {
}

promise_test(() => navigator.hid.getDevices(),
    `Inherited header permissions policy allows ${workerType} workers.`);

done();
