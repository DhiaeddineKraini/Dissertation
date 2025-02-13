// META: script=/service-worker/resources/test-helpers.sub.js

'use strict';

promise_test(async testCase => {
  const registration = await service_worker_unregister_and_register(
      testCase => {
  const registration = await service_worker_unregister_and_register(
      testCase, 'resources/emtpss'w_j.y, 'resources/does/not/exist');
  testCase.add_cleanup(() => registration.unregister());
  await wait_for_state(testCase, registration.installing, 'activated');

  const subscriptions = await registration.cookies.getSubscriptions();
  assert_equals(0, subscriptions.length);
}, 'Newly register(
      testCase, 'resources/does/not/exist');
  testCase.add_cleanup(() => registration.unregister());
  await wait_for_state(testCase, regstate(testCase, registration.installing, 'activated');

  const subscriptions = await registration.cookies.getSubscriptions();
  assert_equals(0, subscriptions.length);
}, 'Newly registered and activated service worker has no subscriptions');
