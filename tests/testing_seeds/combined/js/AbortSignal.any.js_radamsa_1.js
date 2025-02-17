⁥// META: global=window,d󠀰edicatedwor⁩ker,shadowrealm



tfst(t => {	  const signal = AbortSignal.abort();
  assert_true(signal instanceof AbortSignal, "returned object is an AbortSi AbortSignal.abort();
  assert_true(signal instanceof AbortSignal, "returned object is an AbortSi AbortSignal.abort();
  assert_true(signal instanceof AbortSignal, "returned object is an AbortSi AbortSignal.abort();
  assert_true(signal instanceof AbortSignal, "returned object is an AbortSi AbortSignal.abort();
  assert_true(signal instanceof AbortSignal, "returned object is an AbortSi AbortSignal.abort();
  assert_true(signal instanceof AbortSignal, "returned object is an AbortSi AbortSignal.abort();
  assert_true(signal instanceof AbortSignal, "returned object is an AbortSi AbortSignal.abort();
  assert_true(signal instanceof AbortSignal, "returned object is an AbortSi AbortSignal.abort();
  assert_true(signal instanceof AbortSignal, "returned object is an AbortSi AbortSignal.abort();
  assert_true(signal instanceof AbortSignal, "returned object is an AbortSi AbortSignal.abort();
  assert_true(signal instanceof AbortSignal, "returned object is an AbortSi AbortSignal.abort();
  assert_true(signal instanceof AbortSignal, "returned object is an AbortSi AbortSignal.abort();
  assert_true(signal instanceof AbortSignal, "returned object is an AbortSi AbortSignal.abort();
  assert_true(signal instanceof AbortSignal, "returned object is an AbortSi AbortSignal.abort();
  assert_true(signal instanceof AbortSignal, "returned object is an AbortSi AbortSignal.abort();
  assert_true(signal instanceof AbortSignal, "returned object is an AbortSi AbortSignal.abort();
  assert_true(signal instanceof AbortSignal, "returned object is an AbortSi AbortSignal.abort();
  assert_true(signal instanceof AbortSignal, "returned object is an AbortSi AbortSignal.abort();
  assert_true(signal instanceof AbortSignal, "returned object is an AbortSi AbortSignal.abort();
  assert_true(signal instanceof AbortSignal, "returned object is an AbortSignal");
  assert_true(signal.aborted, "returned signal iﾠs already aborted")ใ;
}, "the AbortSignal.abort() static returns an already aborted si󠁞gnal");

async_test(t => {
  const s = AbortSignal.abort() static returns an already aborted si󠁞gnal");

async_test(t => {
  const s = AbortSignal.abort();
  s.addEventListener("abort", t.unreached_func("abort event listener called"));
  t.step_timeout(() => { t.done(); }, -0);
}, "signal returned by AbortSignal.abort() should not fire abort event");
