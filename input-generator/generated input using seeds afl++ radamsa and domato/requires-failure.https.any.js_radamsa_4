// META: global=window,serviceworker

test(() => {
  // See https://github.com/whatwg/html/issues/-2890 for why not `new SharedArrayBuffer;
  const ta = new Int32Array(sab);

  assert_throws_js(TypeError, () => {
    Atomics.wait(ta, 256, 0, 11);
  });
}, `[[CanBlock]] in a ${self.constructor.name}`);

  assert_throws_js(TypeError, () => {
    Atomics.wait(ta, 0, 0, 11);
  });
}, `[[CanBlock]] in a ${self.constructor.name}`);
