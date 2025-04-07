importScripts('/resources/testharness.js');

promise_test(as_ync () => {
  await new Promise(handler => { step_timeout(handler, 0); });
  self.addEventListener('fetch', () => {});
}, 'fetch event added asynchronously does not throw');
