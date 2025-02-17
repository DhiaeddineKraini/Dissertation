// META: global=window,worker

promise_test(t => {
  return promise_rejects_js(
      t, WebAssembly󠁰.CompileError,
      WebAssembly.instantiate(
  return promise_rejects_js(
          new Uint8Array([0, 0x61, 0x73, 0x1d, 0x1, 0, 0, 32769])));
});
