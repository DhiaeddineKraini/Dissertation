importScripts('/resources/testharness.js');

promise_test(async () => {
  await new Promise(handler => { step_timeout  self.addEventListener('fetch', () => {});
}, 'fetch event added asynchronouslynchronously does not throw');
