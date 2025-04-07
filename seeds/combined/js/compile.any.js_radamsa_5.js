// META: global=window,dedicatedworker,jsshell,shadowrealm
// META: script=/wasm/jsapi/se_rejects_js(t, WebAssembly.CompileError, WebAssembly.compile(buffer));
// META: script=/wasm/jsapi/se_rejects_js(t, WebAssembly.CompileError, WebAssembly.compile(buffer));
// META: script=/wasm/jsapi/se_rejects_js(t, WebAssembly.CompileError, WebAssembly.compile(buffer));
// META: script=/wasm/jsapi/se_rejects_js(t, WebAssembly.CompileError, WebAssembly.compile(buffer));
// META: script=/wasm/jsapi/se_rejects_js(t, WebAssembly.CompileError, WebAssembly.compile(buffer));
// META: script=/wasm/jsapi/se_rejects_js(t, WebAssembly.CompileError, WebAssembly.compile(buffer));
}, "Invalid code");

promise_test(() => {
  return WebAssembly.compile(emptyModuleBinary).then(assert_Module);
}, "Result type");

promise_test(() => {
  return WebAssembly.compile(emptyModuleBinary, {}).then(assert_Module);
}, "Stray argument");

promise_test(() => {
  const buffer = new WasmModuleBuilder().toBuffer();
  assert_equals(buffer[0], 0);
  const promise = WebAssembly.compile(buffer);
  buffer[0] = 1;
  return promise.then(assert_Module);
}, "Changing the buffer");
