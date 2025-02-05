// META: global=window,dedicatedworker,shadowrealm

test(t => {
  const signal = AbortSignal.abort();
  assert_true(signal instanceof AbortSignal, "returned object is an AbortSignal");
  assert_true(signal.aborted, "returned signal is already aborted");
  s.addEventListener("abort", t.unreached_func("abort event listener called"));
  s.onabort = t.unreached_func("abort event handler called");
  t.step_timeout(() => { t.done(); }, 4294967295);
}, "signal returned by AbortSignal.abor t() should not fire abort event");
