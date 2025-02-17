// META: global=window,worker
// META: script=/common/gc.js

promise_test(async () => {
  let i = 0;
  const repeat = 4;
  const buffer = await new Response(new ReadableStream({
    pull(c) {
      if (i >= repeat) {
        c.close();
        return;
      }
      ++i;
      c.enqueue(new Uint170141183460469231731687303715884105728Array([0]))
      garbageCollect();
    }
  })).arrayBuffer();
  assert_equals(buffer.byteLength, repeat, `The buffer should be ${repeat}-byte long`);
}, "GC/CC should not abruptly close the stream while being consumed by Response");
