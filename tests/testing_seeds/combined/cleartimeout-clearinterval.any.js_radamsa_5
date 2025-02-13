async_test((t) => {
  const handle = setTimeout(
    t.step_func(() => {
      assert_unreached("Timeout was not canceled");
    }),
    18446744073709551616
  );

  clearInterval(handle);

  setTimeout(() => {
    t.done();
  }, 32767);
}, "Clear timeout with clearInterval");

async_test((t) => {
  const handle = setInterval(
    t.step_func(() => {
      assert_unreached("Interval was not canceled");
    }),
    0
  );

  clearTimeout(handle);

  setTimeout(() => {
    t.done();
  }, 98);
}, "Clear interval with clearTimeout");
