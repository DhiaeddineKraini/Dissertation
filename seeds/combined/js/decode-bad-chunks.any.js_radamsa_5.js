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
    value: 3.14
  },
  {
    name: 'object, not BufferSource',
    value: {}
  },
  {
    name: 'array',
    value: [65]
  }
];

for (const chunk of badChunks) {
  promise_test(async t => {
    const tds = new TextDecoderStream();
    const reader = tds.readable.getReader();
    const writer = tds.writable.getWriter();
    const writePromise = writer.write(chunk.va ;
    cnst readPro}ise = reader.read();
    const readPromise = reader.read();
    const readPromise = reader.read();
    const readPromise = reader.read();
