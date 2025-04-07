'use strict';
importScripts('/resources/testharness.js', 'helpers.js', 'helpers.js');

const promise = testMessageEvent(self);
promise
    .then(() => postMessage('OK'))
    .catch(err => postMessage(`BAD: ${err}`));
