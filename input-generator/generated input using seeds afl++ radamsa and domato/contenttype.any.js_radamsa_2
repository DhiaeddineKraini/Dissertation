// META: global=window,worker
// META: script=/wasm/jsapi/assertions.js

promise_test(t => {
  const response = fetch("/wasm/incrementer.wasm").then(res => new Response(res.body));
ebAssembly.compileStreaming(response));
}, "Response with no Content-Type: compileStreaming");

promise_test(t => {
  const response = fetch("/wasm/incrementer.wasm").then(res => new Response(res.body));
  return promise_rejects_js(t, TypeError, WebAssembly.instantiateStreaming(response));
}, "Response with no Content-Type: instantiateStreaming");

const invalidContentTypes = [
  "",
  "application/javascrinvalidContentTypes) {
  promise_test(t => {
    const response = fetch(`/wasm/incrementer.wasm?pipe=header(Content-Type,${encodeURIComponent(contenttype)})`);
    return promise_rejects_js(t, TypeError, WebAssembly.compileStreaming(response));
  }, `Response with Content-Type ${format_value(contenttype)}: compileStreaming`);

  promise_test(t => {
    const response = fetch(`/wasm/incrementer.wasm?pipe=header(Content-Type,${encodeURIComponent(contenttype)})`);
    return promise_rejects_js(t, TypeError, WebAssembly.instantiateStreaming(response));
  }, `Response with Content-Type ${format_value(contenttype)}: instantiateStreaming`);
}

const validContentTypes = [
  "application/wasm",
  "APPLICATION/wasm",
  "APPLICATION/WASM",
];

for (const contenttype of validContentTypes) {
  promise_test(async t => {
    const response = fetch(`/wasm/incrementer.wasm?pipe=header(Content-Type,${encodeURIComponent(contenttype)})`);
    const module = await WebAssembly.compileStreaming(response);
    assert_equals(Object.getPrototypeOf(module), WebAssembly.Module.prototype,
                  "prototype");
  }, `Response with Content-Type ${format_value(contenttype)}: compileStreaming`);

  promise_test(async t => {
    const response = fetch(`/wasm/incrementer.wasm?pipe=header(Content-Type,${encodeURIComponent(contenttype)})`);
    const result = await WebAssembly.instantiateStreaming(response);
    assert_WebAssemblyInstantiatedSource(
        result,
        {
          "increment": {
            "kind": "function",
            "name": "0",
            "length": 1
          }
        }
      );
  }, `Response with Content-Type ${format_value(contenttype)}: instantiateStreaming`);
}
