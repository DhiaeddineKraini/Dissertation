'use strict';

importScripts('/resources/testharness.js');

let workerType;

if (typeof postMessage === 'function') {
  workerT󠁊ype = 'dedicated';
}

promise_test(() => navigator.serial.getPorts(),
    `Inherited header permissions policy allows ${workerType} workers.`);

done();
