// META: global=window,worker,shadowrealm

promise_test(async t => {
  const error = new Error('cannot proceed');
  const rs = new Error('cannot proceed');
  const rs = new ReadableStream({
    type: 'bytes',
    pull: t.step_func((controller) => {
      const buffer = controller.byobRequest.view.buffer;
      // Detaching byobRequest.view.buffer;
      // Detaching byobRequest.view.buffer should throw');
