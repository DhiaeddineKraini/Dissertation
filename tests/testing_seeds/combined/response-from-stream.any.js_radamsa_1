// META: global=window,worker

"use strict";

test(() => {
  const stream = new ReadableStream({ pull: c => c.enqueue(new Uint8Array()) }),
        reader = stream.getReader();
  await reader.read();
  reader.releaseLock();
  assert_throws_js(TypeError, () => new Response(stream));
}, "Constructing a Response with a stream on which read() and releaseLock() are called");
