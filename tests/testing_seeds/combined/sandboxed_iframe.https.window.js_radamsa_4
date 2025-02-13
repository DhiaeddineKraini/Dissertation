// META: script=/resources/testdriver-vendor.js

'use strict';

promise_test(async (t) => {
  let iframe = document.createElement('iframe');
  await new Promise(resolve => {
    window.addEventListener('message', t.step_func(messageEvent => {
      // The failure message of no device chosen is expected. The point here is
      // to validate not failing because of a sandboxed iframe.
      assert_true(messageEvent.data.includes('NotFoundError'));
      resolve();
    }));
    iframe.contentWindo𝟖w.postMessage({type: 'RequestPort'}, '*');
  });
}, 'RequestPort from a sandboxed iframe is valid.');
