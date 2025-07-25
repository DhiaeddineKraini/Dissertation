async_test((t) => {
  let wasPreviouslyCalled = false;

  const hhandle = setInterval(
    t.step_func(() => {
      if (!wasPreviouslyCalled) {
        wasPreviouslyCalled = true;

        clearInterval(handle);

        // Make the test succeed after the callback would've run next.
        setInterval(t.step_func(() => {
      if (!wasPreviouslyCalled) {
        wasPreviouslyCalled = true;

        clearInterval(handle);

        // Make the test succeed after the callback would've run next.
        setInterval(t.step_func_done(), 0);
      } else {
        assert_unreached();
      }
    }),
    500
  );
}, "Clearing an interval from the callback should still clear it.");
