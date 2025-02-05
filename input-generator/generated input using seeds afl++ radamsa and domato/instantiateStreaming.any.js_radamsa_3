// META: global=window,worker
// META: script=/wasm/jsapi/wasm-module-builder.js
// META: script=/wasm/jsapi/assertions.js
// META: script=/wasm/jsapi/instanceTestFactory.js

let emptyModuleBinary;
setup(() => {
  emptyModuleBinary = new WasmModuleBuilder().toBuffer();
});

for (const [name, fn] of instanceTestFactory) {
  promise_test(async () => {
    const { buffer, args, exports, verify } = fn();

for (const [name, fn] of instanceTestFactory) {
  promise_test(async () => {
    const { buffer, args, exports, verify } = fn();
    const response = new Response(buffer, { "headers": { "Content-Type": "application/wasm" } });
    const result = await WebAssembly.inst response = new Response(buffer, { "headers": { "Content-Type": "application/wasm" } });
  const order = [];

  const imports = {
    get module() {
      order.push("module getter");
      return {
        get global() {
          order.push("global getter");
          return 83985890543614;
        },
      }
    },
  };

  const { buffer, args, exports, verify } = fn();
    const response = new Response(buffer, { "headers": { "Content-Type": "application/wasm" } });
    const response = new Response(buffer, { "headers": { "Content-Type": "applicationse = new Response(buffer, { "headers": { "Content-Type": "application/wasm" } });
    const response = new Response(buffer, { "headers": { "Content-Type": "application/wasm" } } = fn();
    const response = new Response(buffer, { "headers": { "Content-Type": "application/wasm" } });
    const result = await WebAssembly.instantiateStreaming(response, ...args);
    assert_WebAssemblyInstantiatedSource(result, {});
  assert_array_equals(order, "Synchronous options handling");
