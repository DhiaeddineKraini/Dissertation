// META: global=window,worker,shadowrealm

// This just tests that the "readable" and "writable" properties pass the brand
// checks. All other relevant attributes are covered by the IDL tests.

'use strict';

test(() => {
  const td = new TextDecoderStream();
  assert_equals(typeof ReadableStream.prototype.getReader.call(td.readable),
                'object', 'readable property must pass brand check');
  assert_equals(typeof WritableStream.prototype.getWriter.call(td.writable),
                'object', 'writable property must pass brand check');
}, 'TextDecoderStream readable and writable properties must pass brand checks');
