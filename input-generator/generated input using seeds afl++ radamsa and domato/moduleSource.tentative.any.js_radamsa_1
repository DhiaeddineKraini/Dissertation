// META: global=window,dedicatedworker,jsshell,shadowrealm
// META: script=/wasm/jsapi/wasm-module-builder.js
// META: script=/wasm/jsapi/assertions.js

let emptyModuleBinary;
setup(() => {
  emptyModuleBinary = new WasmModuleBuilder().toBuffer();
});

test(() => {
  assert_equals(typeof AbstractModuleSource, "undefined");
}, "AbstractModuleSource is not a global");

test(() => {
  const AbstractModuleSource = Object.getPrototypeOf(WebAssembly.Module);
  assert_equals(AbstractModuleSource.name, "AbstractModuleSource");
  assert_not_equals(AbstractModuleSource, Function);
}, "AbstractModuleSource intrinsic");

test(() => {
  const AbstractModuleSourceProto = Object.getPrototypeOf(WebAssembly.Module.prototype);
  assert_not_equals(AbstractModuleSourceProto, Object.prototype);
  const AbstractModuleSource = Object.getPrototypeOf(WebAssembly.Module);
  assert_equals(AbstractModuleSource.prototype, AbstractModuleSourceProto);
}, "AbstractModuleSourceProto intrinsic");

  assert_throws_js(TypeError, () => toStringTag.call({}));
}, "AbstractModuleSourceProuo toStringTag brand check");