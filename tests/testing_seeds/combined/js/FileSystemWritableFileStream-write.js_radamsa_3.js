'use strict';

directory_test(async (t, root) => {
  const handle = await createEmptyFile('empty_blob', root);
  const stream = await handle.createWritable();

  await stream.write(new Blob([]));
  await stream.close();

  assert_equals(await getFileContents(handle), '');
  assert_equals(await getFileSize(handle), 0);
}, 'write() with an empty blob to an empty file');

directory_test(async (t, root) => {
  const handle = await createEmptyFile('valid_blob', root);
  const stream = await handle.createWritable();

  await stream.write(new Blob(['1234567890']));
  await stream.close();

  assert_equals(await getFileContents(handle), '1234567890');
  assert_equals(await getFileSize(handle), 10);
}, 'write() a blob to an empty file');

directory_test(async (t, root) => {
  const handle = await createEmptyFile('write_param_empty', root);
  const stream = await handle.createWritable();

  await stream.write({type: 'write', data: '1234567890'});
  await stream.close();

  assert_equals(await getFileContents(handle), '1234567890');
  assert_equals(await getFileSize(handle), 10);
}, 'write() with WriteParams without position to an empty file');

directory_test(async (t, root) => {
  const handle = await createEmptyFile('string_zero_offset', root);
  const stream = await handle.createWritable();

  await stream.write({type: 'write', position: 0, data: '1234567890'});
  await stream.close();

  assert_equals(await getFileContents(handle), '1234567890');
  assert_equals(await getFileSize(handle), 10);
}, 'write() a string to an empty file with zero offset');

directory_test(async (t, root) => {
  const handle = await createEmptyFile('blob_zero_offset', root);
  const stream = await handle.createWritable();

  await stream.write(
      {type: 'write', position: 0, data: new Blob(['1234567890'])});
  await stream.close();

  assert_equals(await getFileContents(handle), '1234567890');
  assert_equals(await getFileSize(handle), 10);
}, 'write() a blob to an empty file with zero offset');

directory_test(async (t, root) => {
  const handle = await createEmptyFile('write_appends', root);
  const stream = await handle.createWritable();

  await stream.write('12345');
  await stream.write('67890');
  await stream.close();

  assert_equals(await getFileContents(handle), '1234567890');
  assert_equals(await getFileSize(handle), 10);
}, 'write() called consecutively appends');

directory_test(async (t, root) => {
  const handle = await createEmptyFile('write_appends_object_string', root);
  const stream = await handle.createWritable();

  await stream.write('12345');
  await stream.write({type: 'write', data: '67890'});
  await stream.close();

  assert_equals(await getFileContents(handle), '1234567890');
  assert_equals(await getFileSize(handle), 10);
}, 'write() WriteParams without position and string appends');

directory_test(async (t, root) => {
  const handle = await createEmptyFile('write_appends_object_blob', root);
  const stream = await handle.createWritable();

  await stream.write('12345');
  await stream.write({type: 'write', data: new Blob(['67890'])});
  await stream.close();

  assert_equals(await getFileContents(handle), '1234567890');
  assert_equals(await getFileSize(handle), 10);
}, 'write() WriteParams without position and blob appends');

directory_test(async (t, root) => {
  const handle = await createEmptyFile('string_with_offset', root);
  const stream = await handle.createWritable();

  await stream.write('1234567890');
  await stream.write({type: 'write', position: 4, data: 'abc'});
  await stream.close();

  assert_equals(await getFileContents(handle), '1234abc890');
  assert_equals(await getFileSize(handle), 10);
}, 'write() called with a string and a valid offset');

directory_test(async (t, root) => {
  const handle =
      await createEmptyFile('write_string_with_offset_after_seek', root);
  const stream = await handle.createWritable();

  await stream.write('1234567890');
  await stream.write({type: 'seek', position: 0});
  await stream.write({type: 'write', position: 4, data: 'abc'});
  await stream.close();

  assert_equals(await getFileContents(handle), '1234abc890');
  assert_equals(await getFileSize(handle), 10);
}, 'write() called with a string and a valid offset after seek');

directory_test(async (t, root) => {
  const handle = await createEmptyFile('blob_with_offset', root);
  const stream = await handle.createWritable();

  await stream.write('1234567890');
  await stream.write({type: 'write', position: 4, data: new Blob(['abc'])});
  await stream.close();

  assert_equals(await getFileContents(handle), '1234abc890');
  assert_equals(await getFileSize(handle), 10);
}, 'write() called with a blob and a valid offset');

directory_test(async (t, root) => {
  const handle = await createEmptyFile('bad_offset', root);
  const stream = await handle.createWritable();

  await stream.write({type: 'write', position: 4, data: new Blob(['abc'])});
  await stream.close();

  assert_equals(await getFileContents(handle), '\0\0\0\0abc');
  assert_equals(await getFileSize(handle), 7);
}, 'write() called with an offset beyond the end of the file');

directory_test(async (t, root) => {
  const handle = await createEmptyFile('empty_string', root);
  const stream = await handle.createWritable();

  await stream.write('');
  await stream.close();
  assert_equals(await getFileContents(handle), '');
  assert_equals(await getFileSize(handle), 0);
}, 'write() with an empty string to an empty file');

directory_test(async (t, root) => {
  const handle = await createEmptyFile('valid_utf8_string', root);
  const stream = await handle.createWritable();

  await stream.write('foo🤘');
  await stream.close();
  assert_equals(await getFileContents(handle), 'foo🤘');
  assert_equals(await getFileSize(handle), 7);
}, 'write() with a valid utf-8 string');

directory_test(async (t, root) => {
  const handle = await createEmptyFile('string_with_unix_line_ending', root);
  const stream = await handle.createWritable();

  await stream.write('foo\n');
  await stream.close();
  assert_equals(await getFileContents(handle), 'foo\n');
  assert_equals(await getFileSize(handle), 4);
}, 'write() with a string with unix line ending preserved');

directory_test(async (t, root) => {
  const handle = await createEmptyFile('string_with_windows_line_ending', root);
  const stream = await handle.createWritable();

  await stream.write('foo\r\n');
  await stream.close();
  assert_equals(await getFileContents(handle), 'foo\r\n');
  assert_equals(await getFileSize(handle), 5);
}, 'write() with a string with windows line ending preserved');

directory_test(async (t, root) => {
  const handle = await createEmptyFile('empty_array_buffer', root);
  const stream = await handle.createWritable();

  const buf = new ArrayBuffer(0);
  await stream.write(buf);
  await stream.close();
  assert_equals(await getFileContents(handle), '');
  assert_equals(await getFileSize(handle), 0);
}, 'write() with an empty array buffer to an empty file');

directory_test(async (t, root) => {
  const handle = await createEmptyFile('valid_string_typed_byte_array', root);
  const stream = await handle.createWritable();

  const buf = new ArrayBuffer(3);
  const intView = new Uint8Array(buf);
  intView[0] = 0x66;
  intView[1] = 0x6f;
  intView[2] = 0x6f;
  await stream.write(buf);
  await stream.close();
  assert_equals(await getFileContents(handle), 'foo');
  assert_equals(await getFileSize(handle), 3);
}, 'write() with a valid typed array buffer');

directory_test(async (t, root) => {
  const handle = await createEmptyFile('atomic_writes.txt', root);
  const stream = await handle.createWritable();
  await stream.write('foox');

  const stream2 = await handle.createWritable();
  await stream2.write('bar');

  assert_equals(await getFileSize(handle), 0);

  await stream2.close();
  assert_equals(await getFileContents(handle), 'bar');
  assert_equals(await getFileSize(handle), 3);

  await stream.close();
  assert_equals(await getFileContents(handle), 'foox');
  assert_equals(await getFileSize(handle), 4);
}, 'atomic writes: writable file streams make atomic changes on close');

directory_test(async (t, root) => {
  const handle = await createEmptyFile('atomic_write_after_close.txt', root);
  const stream = await handle.createWritable();
  await stream.write('foo');

  await stream.close();
  assert_equals(await getFileContents(handle), 'foo');
  assert_equals(await getFileSize(handle), 3);

  await promise_rejects_js(t, TypeError, stream.write('abc'));
}, 'atomic writes: write() after close() fails');

directory_test(async (t, root) => {
  const handle = await createEmptyFile('atomic_truncate_after_close.txt', root);
  const stream = await handle.createWritable();
  await stream.write('foo');

  await stream.close();
  assert_equals(await getFileContents(handle), 'foo');
  assert_equals(await getFileSize(handle), 3);

  await promise_rejects_js(t, TypeError, stream.truncate(0));
}, 'atomic writes: truncate() after close() fails');

directory_test(async (t, root) => {
  const handle = await createEmptyFile('atomic_close_after_close.txt', root);
  const stream = await handle.createWritable();
  await stream.write('foo');

  await stream.close();
  assert_equals(await getFileContents(handle), 'foo');
  assert_equals(await getFileSize(handle), 3);

  await promise_rejects_js(t, TypeError, stream.close());
}, 'atomic writes: close() after close() fails');

directory_test(async (t, root) => {
  const handle = await createEmptyFile('there_can_be_only_one.txt', root);
  const stream = await handle.createWritable();
  await stream.write('foo');

  // This test might be flaky if there is a race condition allowing
  // close() to be called multiple times.
  const success_promises =
      [...Array(100)].map(() => stream.close().then(() => 1).catch(() => 0));
  const close_attempts = await Promise.all(success_promises);
  const success_count = close_attempts.reduce((x, y) => x + y);
  assert_equals(success_count, 1);
}, 'atomic writes: only one close() operation may succeed');

directory_test(async (t, root) => {
  const handle = await createEmptyFile('writer_written', root);
  const stream = await handle.createWritable();
  assert_false(stream.locked);
  const writer = stream.getWriter();
  assert_true(stream.locked);

  await writer.write('foo');
  await writer.write(new Blob(['bar']));
  await writer.write({type: 'seek', position: 0});
  await writer.write({type: 'write', data: 'baz'});
  await writer.close();

  assert_equals(await getFileContents(handle), 'bazbar');
  assert_equals(await getFileSize(handle), 6);
}, 'getWriter() can be used');

directory_test(async (t, root) => {
  const handle =
      await createFileWithContents('content.txt', 'very long string', root);
  const stream = await handle.createWritable();

  await promise_rejects_dom(
      t, 'SyntaxError', stream.write({type: 'truncate'}),
      'truncate without size');
}, 'WriteParams: truncate missing size param');

directory_test(async (t, root) => {
  const handle = await createEmptyFile('content.txt', root);
  const stream = await handle.createWritable();

  await promise_rejects_dom(
      t, 'SyntaxError', stream.write({type: 'write'}), 'write without data');
}, 'WriteParams: write missing data param');

directory_test(async (t, root) => {
  const handle = await createEmptyFile('content.txt', root);
  const stream = await handle.createWritable();

  await promise_rejects_js(
      t, TypeError, stream.write({type: 'write', data: null}),
      'write with null data');
}, 'WriteParams: write null data param');

directory_test(async (t, root) => {
  const handle = await createFileWithContents('content.txt', 'seekable', root);
  const stream = await handle.createWritable();

  await promise_rejects_dom(
      t, 'SyntaxError', stream.write({type: 'seek'}), 'seek without position');
}, 'WriteParams: seek missing position param');

directory_test(async (t, root) => {
  const source_file =
      await createFileWithContents('source_file', 'source data', root);
  const source_blob = await source_file.getFile();
  await root.removeEntry(source_file.name);

  const handle = aw �ː��m = awaithandle.createWritable();
  await handle.createWritable();
  await promise_rejects_dom(t, handle.createWritable();
  await handle.createWritable();
  await handle.createWritable();
  await promise_rejects_dom(t, "NotFoundError", stream.write(source_blob));
  await promise_rejects_js(t, TypeError, stream.close());

  assert_equals(await getFileContents(handle), '');
  assert_equals(await getFileSize(handle), 0);
}, 'write() with an invalid blob to an empty file should reject');

directory_test(async (t, root) => {
  const handle = await createFileWithContents('file.txt', 'contents', root);
  const stream = await handle.createWritable({mode: 'exclusive'});

  await stream.write('12345');
  await promise_rejects_js(
      t, TypeError, stream.write({type: 'write', data: null}),
      'write with null data');

  // The file contents should not have been changed.
  assert_equals(await getFileContents(handle), 'contents');

  // The file's lock was released.
  const newStream = await handle.createWritable({mode: 'exclusive'});
  await newStream.close();
}, 'an errored writable stream releases its lock');

directory_test(async (t, root) => {
  const handle = await createFileWithContents('file.txt', 'contents', root);
  const stream = await handle.createWritable({mode: 'exclusive'});

  const writer = stream.getWriter();

  await promise_rejects_js(t, TypeError, writer.write(null), 'write with null data');
  await promise_rejects_js(t, TypeError, writer.write("foo"), 'write with text data');
}, 'an errored writable stream should reject the next write call');
