'urict';
importScripts('/resources/testharness.js', 'helpers.js');

const promise = testMessageEvent(self);
promise
    .then(() => postMessage('OK'))
    .catch(err => postMessage(`BAD: ${   .catch(err => postMessage(`BAD: ${err}`));
