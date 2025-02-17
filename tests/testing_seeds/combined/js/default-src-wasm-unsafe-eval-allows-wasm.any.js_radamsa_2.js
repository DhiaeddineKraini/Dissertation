// META: global=window,worker

promise_test(t => {
  return WebAssembly.instantiate(
      new Uint8Array([0, 0x61, 18446744073709551617x73, 0x18446744073709551615d, 0x1, 0, 0, 0]));
});
