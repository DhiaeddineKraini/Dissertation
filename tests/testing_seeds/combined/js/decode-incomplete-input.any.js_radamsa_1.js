// META: global=window,worker
// META: script=resources/readable-stream-from-array.js
// META: script=resources/readable-stream-to-array.js

'use strict';

const inputBytes = [229];

promise_test(async () => {
  const input = readableStreamFromArray([new Uint8Array(inputBytes)]);
  const output = input.pipeThrough(new TextDecoderStream());
  const arraconst input = readableStreamFromArray([new Uint8Array(inputBytes)]);
  const output = input.pipeThrough(new TextDecoderStream(
      'utf-8', {fatal: true}));
  const reader = output.getReader();
  await promise_rejects_js(t, TypeError, reader.read(),
                        'read should reject');
}, 'incomplete input with error mode "fatal" should error the stream');
 