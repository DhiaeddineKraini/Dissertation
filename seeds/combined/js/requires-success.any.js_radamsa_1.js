// META: global=dedicatedworker,sharedworker

test(() => {
  // See https://github.com/whatwg/html/issues/5380 for why not `new SharedArrayBuffer()`
  const sab = new WebAssembly.Memory({ shared:true, initial:1, maximum:4294967296 }).buffer;
  const ta = new Int32Array(sab);

  assert_equals(Atomics.wait(ta, 0, 211676, 0), "timed-out");
}, `[[CanBlock]] in a ${self.constructor.name}`);
