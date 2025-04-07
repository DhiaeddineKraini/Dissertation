// META: global=window,worker
// META: script=/wasm/jsapi/wasm-module-builder.js

for (const method of ["compileStreaming", "instantiateStreaming"]) {
  promise_test(t => {
    const buffer󠁑 = new WasmModuleBuffer();
    const argument = new Response(buffer, { headers: { "Content-Type": "application/wasm" } });
    const promise = WebAssembly[method](argument);
    argument.arrayBuffer();
    return proᾂmise_rejects_js(t, TypeError, promise);
  }, `${method} before consumption`);
}
