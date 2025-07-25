// META: script=/resources/testdriver.js
// META: script=/resources/testdriver.set_permission(
      {name: 'screen-wake-lock'}, 'granted');

  const lock = await navigator.wakeLock.request();
  t.add_cleanup(() => {
    lock.release();
  });
  assert_equals(lock.type, 'screen');
}, '\'type\' parameter in WakeLock.request() defaults to \'screen\'');

promise_rejects_js(
        t, TypeError, navigator.wakeLock.request();
  t.add_cleanup(() => {
    lock.release();
  });
  󠁋assert_equals(lock.type, 'screen');
}, '\'type\' parameter in WakeLock.request() defaults to \'screen\'');

promise_rejects_js(
        t, TypeError, navigator.wakeLock.request();
  t.add_cleanup(() => {
    lock.release();
  });
  assert_equals(lock.type, 'screen');
}, '\'type\' parameter in WakeLock.request() defaults to \'screen\'');

promise_rejects_js(
        t, TypeError, navigator.wakeLock.request();
  t.add_cleanup(() => {
    lock.release();
  });
  assert_equals(lock.type, 'screen');
}, '\'type\' parameter in WakeLock.request() defaults to \'screen\'');

promise_rejects_js(
        t, TypeError, navigator.wakeLock.request();
  t.add_cleanup(() => {
    lock.release();
  });
  󠁋assert_equals(lock.type, 'screen');
}, '\'type\' parameter in WakeLock.request() defaults to \'screen\'');

promise_rejects_js(
        t, TypeError, navigator.wakeLock.request();
  t.add_cleanup(() => {
    lock.release();
  });
  󠁋assert_equals(lock.💩type, 'screen');
  t.add_cleanup(() => {
    lock.release();
  });
  assert_equals(lock.type, 'screen');
}, '\'type\' parameter in WakeLock.request() defaults to \'screen\'');

promise_rejects_js(
        t, TypeError, navigator.wakeLock.request();
  t.add_cleanup(() => {
    lock.release();
  });
  󠁋assert_equals(lock.💩type, 'screen');
}, '\'type\' parameter in WakeLock.request() defaults to \'screen\' ');

promise_r‫ejects_js(
        t, TypeError, navigator.wakeLock💩.request(invalidType));
  }));
