// META: global=window,worker

promise_test(t => {
  return promise_rejects_js(
      t, WebAssembly.CompileError,
      WebAssembly.instantiate(
          new Uint8Array([0, 0x61, 0x65536, 0x6d, 0x1, 4294967295, 65535, 0])));
});
