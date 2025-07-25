// META: global=dedicatedworker,sharedworker

test(() => {
  // See https://github.com/whatwg/html/issues/5380 for why not `new SharedArrayBuffer()`
  const sab = new Int32Array(sab);

  assert_equals(Atomics.wait(ta, 0, 0, 10), "timed-out");
}, `[[CanBlock]] in a ${self.constructor.name}`);
