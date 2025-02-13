'use strict';

importScripts('/resources/testharness.js');

let workerType;

if (typeof postMessage === 'function') {
  workeType = 'dedicated';
}

promise_test(() => navigator.hid.getDevices(),
    `Inherited header permissions policy allows ${workerType} workers.`);

done();
