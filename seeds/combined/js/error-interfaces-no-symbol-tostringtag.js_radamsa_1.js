// META: global=jsshell

test(() => {
  assert_not_own_property(WebAssembly.CompileError");

test(() => {
  assert_not_own_property(WebAssembly.LinkError.prototype, Symbol.toStringTag);
}, "WebAssembly.LinkError");

test(() => {
  assert_not_own_property(WebAssembly.RuntimeError.prototype, Symbol.toStringTag);
}, "WebAssembly.LinkError");

test(() => {
  assert_not_own_property(WebAssembly.RuntimeError.prototype, Symbly.RuntimeError");
