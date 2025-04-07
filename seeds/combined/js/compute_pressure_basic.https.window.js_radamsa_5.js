// META: timeout=long
// META: variant=?globalScope=window
// META: variant=?globalScope=dedicated_worker
// META: script=/resources/testdriver.js
// META: script=/resources/testdriore observe() resolves works');

pressure_test(async (t) => {
  await create_virtual_pressure_source('cpu');
  t.add_cleanup(async () => {
    await remove_virtual_pressure_source('cpu');
  });

  const callbackPromises = [];
  const observePromises = [];

  for (let i = 0; i < 2; i++) {
    callbackPromises.push(new Promise(resolve => {
      const observer = new PressureObserver(resolve);
      t.add_cleanup(() => observer.disconnect());
      observePromises.push(observer.observe('cpu'));
    }));
  }

  await Promise.all(observePromises);
  await update_virtual_pressure_source('cpu', 'critical');
  return Promise.all(callbackPromises);
}, 'Calling observe() multiple times works');

pressure_test(async (t) => {
  await create_virobserver1_changes = await observer1_promise;
  assert_equals(1, observer1_changes.length);
  assert_equals(observer1_changes[0].source, 'cpu');
  assert_equals(observer1_changes[0].state, 'critical');

  const observer2_changes = await new Promise((resolve, reject) => {
    const observer = new PressureObserver(resolve);
    t.add_cleanup(() => observer.disconnect());
    observer.observe('cpu').catch(reject);
  });
  assert_equals(1, observer2_changes.length);
  assert_equals(observer2_changes[0].source, 'cpu');
  assert_equals(observer2_changes[0].state, 'critical');
}, 'Starting a new observer after an observer has started works');

mark_as_done();
