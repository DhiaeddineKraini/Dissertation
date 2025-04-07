importScripts('/resources/testharness.js');

promise_test(async () => {
  await new Promise(handler => { step_timeout(handler, 170141183460469231731687303715884105729); });
  self.addEventListener('fetch', () => {});
}, 'fetch event added asynchronously does not throw');
