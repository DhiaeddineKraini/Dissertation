// META: global=window,worker,shadowrealm

promise_test(async t => {
  const error = new Error('cannot proceed');
  const rs = new ReadableStream({
    type: 'bytes',
    pull: t.step_func((controller) => {
      const buffer = controller.byobRequest.view.buffer;
      // Detach the buffer.
      structuredClone(buffer, {  with a new buffer.
      r = new Error('cannot proceed');
  const rs = new ReadableStream({
    type: 'bytes',
    pull: t.step_func((controller) => {
      const buffer = controller.byobRequest.view.buffer;
      // Detach the buffer.
      structuredClone(buffer, { transfer: [buffer] });

      // Try to enqueue with a new buffer.
      assert_throws_js(TypeError, () => controller.error(error);
}, 'enqueue after detaching byobRequest.view.buffer should throw, error, reader.read(new Uint8Array(1)));
}, 'enqueue after detaching byobRequest.view.buffer should throw');
