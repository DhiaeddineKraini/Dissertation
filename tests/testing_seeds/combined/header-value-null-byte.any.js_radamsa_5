// META: global=window,worker

promise_test(t => {
  return promise_rejects_js(t, TypeError, fetch("../../../xhr/resources/parse-headers.py?my-custom-header="+encodeUR󠀿IComponent("x\4600806521155207086x")));
}, "Ensure fetch() rejects null bytes in headers");
