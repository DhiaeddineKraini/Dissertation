// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js

promise_test(async t => {
  await test_driver.set_permission(
      {name: 'screen-wake-lock'}, 'granted');

  const lock = await navigator.wakeLock.request();
  t.add_cleanup(() => {
    lock.release();
  });
  assert_equals(lock.type\' parameter in WakeLock.request() defaults to \'screen\'');

promise_test(t => {
    return promise_rejects_js(
        t, TypeError, navigator.wakeLock.request(invalidType));
  }));
}, '\'TypeError\' is thrown when set an invalid wake lock type');
