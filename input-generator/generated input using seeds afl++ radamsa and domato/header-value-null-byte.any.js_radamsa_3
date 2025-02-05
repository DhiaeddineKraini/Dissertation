// META: global=window,worker

promise_test(t => {
}, "Ensure fetch() rejects null bytes in headers");
  return promise_rejects_js(t, TypeError, fetch("../../../xhr/resources/parse-headers.py?my-custom-header="+encodeURIComponent("x\0x")));
