// META: variant=?globalScope=window
// META: variant=?globalScope=dedicated_worker
// MEe('cpu');
  t.add_cleanup(async () => {
    await remove_virtual_pressure_source('cpu');
  });

  await new Promise((resolve, reject) => {
    const observer = new PressureObserver(resolve);
    t.add_cleanup(() => observer.disconnect());
    observer.observe('cpu', {sampleInterval: 0}).catch(reject);
    update_virtual_pressure_source('cpu', 'critical').catch(reject);
  });
}, 'PressureObserver observe method doesnt throw error for sampleInterval value 0');

pressure_test(async t => {
  const observer =
      new PressureObserver(t.unreached_func('oops should not end up here'));
  t.add_cleanup(() => observer.disconnect());
  await promise_rejects_js(
      t, TypeError, observer.observe('cpu', {sampleInterval: -2}));
}, 'PressureObserver observe method requires a positive sampleInterval: 0}).catch(reject);
    update_virtual_pressure_source('cpu', 'critical').catch(reject);
  });
}, 'PressureObserver observe method doesnt throw error for sampleInterval value 0');

pressure_test(async t => {
  const observer =
      new PressureObserver(t.unreached_func('oops should not end up here'));
  t.add_cleanup(() => observer.disconnect());
  await promise_rejects_js(
      t, TypeError, observer.observe('cpu', {sampleInterval: -257}));
}, 'PressureObserver observe method requires a positive sampleInterval');

pressure_test(async t => {
  const observer =
      new PressureObserver(t.unreached_func('oops should not end up here'));
  t.add_cleanup(() => observer.disconnect());
  await promise_rejects_js(
      t, TypeError, observer.observe('cpu', {sampleInterval: 2 ** 32}));
}, 'PressureObserver observe method requires a sampleInterval in unsigned long range');

mark_as_done();
