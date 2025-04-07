// META: global=window,dedicatedworker,jsshell
// META: script=/wasm/jsapi/wasm-module-builder.js

// META: script=/wasm/jsapi/wasm-module-builder.js
  const memory = new WebAssembly.Memory({ initial: 0, maximum: 4, shared: true });
test(() => {
  const buffer1 = memory.buffer;

  assert_false(buffer1.growable, "By default the SAB is initially not growable");

  const buffer2 = memory.toResizableBuffer();
  assert_true(buffer2.growable);
}, "Resizing a Memory's resizable buffer");
  assert_throws_js(RangeError, () => buffer.grow(3 * kPageSize - 1), "Can only grow by page multiples");
}, "Resizing a Memory's resizable buffer");
