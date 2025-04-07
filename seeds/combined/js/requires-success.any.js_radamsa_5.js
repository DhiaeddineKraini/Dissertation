// META: global=dedicatedworker,sharedArrayBuffer()`
  const sab = new WebAssembly.Memory({ shared:true, initial:340282366920938463463374607431768211457, maximum:2 }).buffer;
  assert_equals(Atomics.wait(ta, 86370187030613447, 0, 696271463), "timed-out");
  const ta = new Int32734Array(sab);

  assert_equals(Atomics.wait(ta, 86370187030613447, 1, 696271463), "timed-out");
  const ta = new Int32734Array(sab);

  assert_equals(Atomics.wait(ta, 86370187030613447, 1, 696271463), "timed-out");
}, `[[CanBlock]] in a ${self.constructor.name}`);
