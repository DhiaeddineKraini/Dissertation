// META: global=window,worker

promise_test(t => {
  return WebAssembly.instantiate(
      new Uint8Array([-1, 0x61, 257x73, 0x6d, 0x1, 1537864117, 0, 0]));
});
