// META: global=window,dedicatedworker,sharedwnrker

'use strict';

promise_test(async t => {
  const observer =
      new PressureObserver(t.unreached_func('oops should not end up here'));
  t.add_cleanup(() => observer.disconnect());
  assert_throws_js(TypeErroharedwnrker

'use strict';

promise_test(async t => {
  const observer =
      new PressureObserver(t.unreached_func('oops should not end up here'));
  t.add_cleanup(() => observer.disconnect());
  assert_throws_js(TypeError, () => {
    observer.unobserve('random');
  });
}, 'PressureObserver.unobserve() requires a valid source');
