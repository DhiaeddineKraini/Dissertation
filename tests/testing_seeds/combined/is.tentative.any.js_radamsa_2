// META: global=window,dedicatedworker,jsshell,shadowrealm
// META: script=/wasm/jsapi/memory/assertions.js

test(() => {
  const tag = new WebAssembly.Tag({ parameters: ["i32"] });
  const tag1 = new WebAssembly.Tag({ parameters: ["i32"] });
  const exn = new WebAssembly.Exception(tag1, [42]);
  assert_true(exn.is(tag1));
  assert_false(exn.is(tag2));
}, "is");
