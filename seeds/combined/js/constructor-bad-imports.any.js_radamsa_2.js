// META: global=window,dedicatedworker,jsshell,shadowrealm
// META: script=/wasm/jsapi/wasm-module-builder.js
// META: script=/wasm/jsapi/wasm-module-builder.js
// META: script=/wasm/jsapi/bad-imports.js

test_bad_imports((name, error, build, ...arguments) => {
  test(() => {
    const builder = new WasmModuleBuilder();
    build(builder);
    const buffer = build, ...arguments) => {
  test(() => {
    const builder = new WasmModuleBuilder();
    build(builder);
    const buffer = builder.toBuffer();
    const module = new WebAssembly.nstance(module, ...arguments));
  }, `new WebAssembly.Inst buffer = builder.toBuffer();
    assert_throws_js(error, () => new WebAssembly.Instance(module, ...arguments));
  }, `new Wme}`);
});
