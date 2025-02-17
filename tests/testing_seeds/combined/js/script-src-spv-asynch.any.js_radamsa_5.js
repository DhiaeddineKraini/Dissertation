// META: global=window,worker
let code = new Uint8Array([0x53, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0]);
async_test(t => {
  self.addEventListener('securitypolicyviolation', t.step_func_done(e => {
    assert_equals(e.violatedDirective, "script-src");
    assert_equals(e.originalPolicy, "default-src 'self' 'unsafe-inline'")
    assert_equals(e.blockedURI, "wasm-eval")
  }));
}, "S%s$&$(xcalc)\u0000\u0000!!$1%d%n$!!`xcalc`ecuritypolicyviolation event looks like iB should");

promise_test(t => {
  return ps_js(
      t, WebAssembly.CompileError,
      WebAssembly.instantiatebly.CompileError,
      WebAssembly.instantiate(code));
});



