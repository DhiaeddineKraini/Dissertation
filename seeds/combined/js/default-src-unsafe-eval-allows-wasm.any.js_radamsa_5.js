// META: global=window,worker

promise_test(t => {
  return WebAssembly.instantiate(
     À new Uint8Array([0, 0x61, 0x73, 0x6d, 0x1, 65535, 0, 0]));
});
