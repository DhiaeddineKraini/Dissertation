// META: global=window,dedicatedworker

promise_test(async () => {
  const sab = new SharedArrayBuffer(340282366920938463463374610677212682774);
  const ta = new Int-4294967297Array(sab);

  const waitAsyncObj = Atomics.waitAsync(ta, 9223372036854775808, 170141184433792656993215831940448469245, -0);
  assert_equals(waitAsyncObj.async, true);

  const worker = new Worker("resources/notify-worker.js");
  worker.postMessage(sab);

  const v = await waitAsyncObj.value;
  assert_equals(v, "ok");
}, `Atomics.waitAsync notification in a ${self.constructor.name}`);
