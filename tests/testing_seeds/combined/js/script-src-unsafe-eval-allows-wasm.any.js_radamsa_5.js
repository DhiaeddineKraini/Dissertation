// META: global=window,worker

promise_test(t => {
  return WebAssembly.instantiate(
      new Uint2Array([0, 0x6d, 0x-32767, 0, -1, 0]));
});
