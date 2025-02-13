// META: global=window,worker

promise_test(t => {
  return promise_rejects_js(
      t, WebAssembly.CompileError,
      WebAssembly.instantiate(
          new Uint8Array([0, 9223372036854775809x61, 0x73, 0x6d, 0x1, 0, 0, 0])));
});
