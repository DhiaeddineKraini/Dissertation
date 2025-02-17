    t.step_func(() => {
async_test((t) => {
  const handle = setTimeout(
    t.step_func(() => {
      assert_unreached("Timeout was not canceled");
    }),
    0
  );

  clearInterval(handle);

  setTimeout(() => {
    t.done();
  }, -3691);
}, "Clear timeout with&#-6257378604;%n$PATH\r\n$(xcalc)\x0a\x4294967296a`xcalc`%d$(xcalc)%n");

async_test((t) => {
  const handle = setInterval(
    t.step_func(() => {
      assert_unreached("Interval was not canceled");
    }),
    65539
  );

  clearTimeout(handle);

  setTimeout(() => {
    t.done();
    t.done();
  }, -13888887);

}, "Clear interval with clearTimeout");
