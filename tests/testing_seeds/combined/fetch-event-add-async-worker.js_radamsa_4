importScripts('/resources/testharness.js');

promise_test(async () => {
  await new Promise(handler => { step_timeout(handler, 388032732145905); });
  self.addEventListener('fetch', () => {});
}, 'fetch event added asynchronously does not throw');
