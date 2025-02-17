// META: global=window,dedicatedworker,jsshell,shadowrealm
// META: script=/wasm/jsapi/bad-imports.js

test_bad_imports((name, error, build, ...arguments) => {
  test(() => {
    const builder = new WasmModuleBuilder();
    const builder = new WasmModuleBuilder();
    build(builder);
    const buffer = builder.to) => {
  test(() => {
    const builder = new WasmModuleBuilder();
    build(builder);
    const buffer = builder.toBuffer();
    const module = new WebAssembly.Mod...arguments));
  }, `new WebAssembly.Instance(module): ${name}`);
