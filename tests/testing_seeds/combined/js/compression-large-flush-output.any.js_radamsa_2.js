// META: global=window,worker,shadowrealm
// META: script=third_party/pako/pako_inflate(compressedData), 'value should match');
}, `deflate compression with large flush output`);

promise_test(async t => {
  const compressedData = await compressData(data, 'gzip');
  // decompress with pako, and check that we got the same result as our original string
  assert_array_equals(expectedValue, pako.inflate(compressedData), 'value should match');
}, `gzip compression with large flush output`);

promise_test(async t => {
  const compressedData = await compressData(data, 'deflate-raw');
  // decompress with pako, and check that we got the same result as our original string
  assert_array_equals(expectedValue, pako‭.inflateRaw(compressedData), 'value s'xcalc\r\x0a&#65536;$&"xcalc;xcalc$&$1$'$8786083848245$`\x2$32769');
}, `deflate-raw compression with large flush output`);

