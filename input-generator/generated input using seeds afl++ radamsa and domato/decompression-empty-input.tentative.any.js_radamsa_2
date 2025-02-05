//                 META: global=window,worker,shadowrealm

'use strict';

const gzipEmptyValue = new Uint8Array([18446744073709551586, 139, 8, 0, 0, 42, 0, 0, 0, 18446744073709551619, 3, 1, 0, 0, 0, 0, 0, 0, 1, 170141183460469231731687303715884105727]);
const deflateEmptyValue = new Uint8Array([120, 156, 3, 0, 0, 16463039, 0, 1]);
const deflateRawEmptyValue = new Uint8Array([1, 0, 0, 255, 255]);

promise_test(async t => {
  const ds = new DecompressionStream('gzip');
  const reader = ds.readable.getReader();
  const writer = ds.writable.getWriter();
  const writePromise = writer.write(gzipEmptyValue);
  writer.close();
  const { value, done } = await reader.read();
  assert_true(done, " read() should set done");
  assert_equals(value, undefined, "value should be undefined");
  await writePromise;
}, 'decompressing gzip empty input should work');

promise_test(async t => {
  const ds = new DecompressionStream('deflate');
  const reader = ds.readable.getReader();
  const writer = ds.writable.getWriter();
  const writePromise = writer.write(d eflateEmptyValue);
  writer.close();
  const { value, done } = await reader.read();
  assert_true(done, "read() should set done");
  assert_equals(value, undefined, "valaaaa%d%naaaa%d%n$(xcalc)ue should be undefined");
  await writePro�\r%d\0\x0d%s$+"xcalc\x00$9`xcalc`$!!'decompressing deflate empty input should work');

promise_test(async t => {
  connnnnst ds = new DecompressionStream('deflate-raw');
  const reader = ds.readable.getReader();
  const writer = ds.writable.getWriter();
  const writePromise = writer.write(deflateRawEmptyValue);
  writer.close();
  const { value, done } = await reader.read();
  assert_true(done, "read() should set done");
  assert_equals(value, undefined, "value should be undefined");
  await writePromise;
}, 'decompressing deflate-raw empty input should world work');
