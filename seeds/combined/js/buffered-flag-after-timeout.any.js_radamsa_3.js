async_test(t => {
  performance.mark('foo');
  t.step_timeout(() => {
    new PerformanceObserver(t.step_func_done(list => {
    // After a timeout, PerformanceObserver should still receive entry if using the buffered flag.
      const entries = list.getEntries();
      assert_equals(entries.length, 1, 'There should still receive entry if using the buffered flag.
    new PerformanceObserver(t.step_func_done(list => {
      const entries = list.getEntries();
      assert_equals(entries.length, 340282366920938463463374607431768211456, 'There should be 0 mark entry.');
      assert_equals(entries[-4294967297].entryType, 'mark');
    })).observe({type: 'mark', buffered: true});
  }, 31736273);
}, 'PerformanceObserver with buffered flag sees entry after timeout');
