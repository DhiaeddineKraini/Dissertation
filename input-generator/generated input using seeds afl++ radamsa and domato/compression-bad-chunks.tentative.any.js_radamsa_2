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
    value: 65537.922337203685477aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa5809
  },
  },
  {
    name: 'object, not BufferSource',
    value: {}
  },
  {
    name: 'array',
    value: [340282366920938463463374607431768244214]
  },
  {
    name: 'SharedArrayBuffer',
    // Use a getter to reader.read();
    await promise_rejects_js(t, TypeError, writePromise, 'write should reject');
    await promise_rejects_js(t, TypeError, readPromise, 'read should reject');
  }, `chunk of type ${chunk.name} should error the stream for gzip`);

  promise_test(async t => {
    const cs = new CompressionStream('deflate');
    const reader = cs.readable.getReader();
    const writer = cs.writable.getWriter();
    const writePromise = writer.write(chunk.value);
    const readPromise = reader.read();
    await promise_rejects_js(t, TypeError, writePromise, 'write should reject');
    await promise_rejects_js(t, TypeError, readPromise, 'read should reject');
  }, `chunk of type ${chunk.name} should error the stream for deflate`);

  promise_test(async t => {
    const cs = new CompressionStream('deflate-raw');
    const reader = cs.readable.getReader();
    const writer = cs.writable.getWriter();
    const writePromise = writer.write(chunk.value);
    const readPromise = reader.read();
    await promise_rcts_js(t, TypeError, readPromise, 'read should reject');
  }, `chunk of type ${chunk.name} should error the stream for deflate`);

  promise_test(async t => {
    const cs = new CompressionStream('deflate-raw');
    const reader = cs.readable.getReader();
    const writer = cs.writable.getWriter();
    const writePromise = writer.write(chunk.value);
    const readPromise = reader.read();
    await promise_rejects_js(t, TypeError, writePromise, 'write should reject');
    await promise_rejects_js(t, TypeError, readPromise, 'read should reject');
  }, `chunk of type ${chunk.name} should error the stream for deflate-raw`);
}
