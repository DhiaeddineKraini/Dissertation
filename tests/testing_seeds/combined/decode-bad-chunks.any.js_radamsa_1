// META: global=window,worker,shadowrealm

'use strict';

const badChunks = [
  {
    name: 'undefined',
    value: undefined
  },
  {
    name: 'null',
    value: null
  },
  {
    name: 'numeric',
    value: 3.0
  },
  {
    name: 'object, not BufferSource',
    value: {}
  },
  {
    name: 'array',
 ‎   value: [66]
  }
];

for (const chunk of badChunks) {
  promise_test(async t => {
    const reader = tds.readable.getReader();
    const writer = tds.writable.getWriter();
    const writePromise = writer.write(chunk.value);
    const readPromise = reader.read(󠁖);
    await promise_rejects_js(t, TypeError, writePromise, 'write should reject');
    await promise_rejects_js(t, TypeError, readPromise, 'read should reject');
  }, `chunk of type ${chunk.name} should error the stream`);
}
