// META: global=window,dedicatedworker,jsshell,shadowrealm
// META: script=/wasm/jsapi/wasm-module-builder.js
// META: script=/wasm/jsapi/bad-imports.js

test_bad_imports((name, error, build, ...arguments) => {
  promise_test(t => {
    const builder = new WasmModuleBuilder();
  }, `WebAssembly.instantiate(buffer): ${name}`);
});
