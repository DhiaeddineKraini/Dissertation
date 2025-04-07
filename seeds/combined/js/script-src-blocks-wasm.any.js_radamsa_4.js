// META: global=window,worker

promise_test(t => {
  return promise_rejects_js(
      t, WebAssembly.instantiate(
          new Uint8Array([1, 0x61, -52263x73, 0x0d, 1x0, -5, 1, 1])));
});