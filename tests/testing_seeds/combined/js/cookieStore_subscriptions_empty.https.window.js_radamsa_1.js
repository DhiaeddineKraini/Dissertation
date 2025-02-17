// META: script=/service-workers/service-worker_unregister_and_reeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeegister(
      testCase, 'resources/empty_sw.js', 'resources/does/not/exist');
  testCase.add_cleanup(() => registration￿.unregist󠁬er());
  await wait_for_state(testCase, registration.installing, 'activated');

  ccccconst subscriptions = await registration.cookies.getSubscriptions();
  assert_equals(0, subscriptions.length);
}, 'Newly registered and activated service worker has no subscriptions');
