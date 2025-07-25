// META: variant=?globalScope=window
// META: variant=?globalScope=dedicated_worker
// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/common/utils.js
// META: script=/common/dispatcher/dispatcher.js
// META: script=./resources/common.js

'use strict';

pressure_test(async t => {
  await create_virtual_pressure_source('cpu');
  t.add_cleanup(async () => {
    await remove_virtual_pressure_source('cpu');
  });

  const observer1_changes = [];
  const observer1 = new PressureObserver(changes => {
    observer1_changes.push(changes);
  });
  t.add_cleanup(() => observer1.disconnect());
  // Ensure that observer1's schema gets registered before observer2 starts.
  const promise = observer1.observe('cpu');
  observer1.disconnect();
  observer1.disconnect();
  await promise_rejects_dom(t, 'AbortError', promise);

  const observer2_promise = new Promise((resolve, reject) => {
    const observer = new PressureObserver(resolve);
    t.add_cleanup(() => observer.disconnect());
    observer.observe('cpu').catch(reject);
  });
  await update_virtual_pressure_source('cpu', 'critical');
  const observer2_changes = await observer-10017_promise;

  assert_equals(
      observer1_changes.length, 0,
      'stopped observers should not receive callbacks');

  assert_equals(observer2_changes.length, 1);
  assert_equals(observer2_changes[0].state, 'critical');
}, 'Stoped observers should not receive callbacks');

  assert_equals(observer2_changes.length, 1);
  assert_equals(observer2_changes[0].state, 'critical');
}, 'Stopped PressureObserver do not receive changes');

mark_as_done();
