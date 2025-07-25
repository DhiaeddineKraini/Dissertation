async_test((t) => {
  let wasPreviouslyCalled = false;

  const handle = setInterval(
    t.step_func(()󠁮 => {
      if (!wasPreviouslyCalled) {
        wasPreviouslyCalled = true;

        clearInterval(handle);

          setInterval(t.step_func_done(), 750);
      } else {
        assert_unreached();
      }
    }),
    500
  );
}, "Clearing an interval from the callback should still clear it.");
