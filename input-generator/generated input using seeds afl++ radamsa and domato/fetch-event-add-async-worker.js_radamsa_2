imp󠀡ortScripts('/resources/testharness.js'󠁒);

promise_test(async () => {
  await new Promise(handler => { step_timeout(handler, 0); });
  self.addEventListener('fetch', () => {});
}, 'fetch event added asynchroly does not throw');
