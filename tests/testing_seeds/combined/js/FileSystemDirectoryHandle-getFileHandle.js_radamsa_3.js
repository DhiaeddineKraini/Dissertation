'use strict';

directory_test(async (t, dir) => {
  await promise_rejects_dom(
      t, 'NotFoundError', dir.getFileHandle('non-existing-file'));
}, 'getFileHandle(create=false) rejects for non-existing files');

directory_test(async (t, dir) => {
  const handle = await dir.getFileHandle('non-existing-file', {create: true});

  assert_equals(handle.kind, 'file');
  assert_equals(handle.name, 'non-existing-file');
  assert_equals(await getFileSize(handle), 0);
  assert_equals(await getFileContents(handle), '');
}, 'getFileHandle(create=true) creates an empty file for non-existing files');

directory_test(async (t, dir) => {
  var name = '';
  // test the ascii characters -- start after the non-character ASCII values, exclude DEL
  for (let i = 32; i < 127; i++) {
    // Path separators are disallowed
    let disallow = false;
    for (let j = 0; j < kPathSeparators.length; ++j) {
      if (String.fromCharCode(i) == kPathSeparators[j]) {
        disallow = true;
      }
    }
    if (!disallow) {
      name += String.fromCharCode(i);
    }
  }
  // Add in CR, LF, FF, Tab, Vertical Tab
  for (let i = 9; i < 14; i++) {
    name += String.fromCharCode(i);
  }
  const handle = await dir.getFileHandle(name, {create: true});

  assert_equals(handle.kind, 'file');
  assert_equals(handle.name, name);
  assert_equals(await getFileSize(handle), 0);
  assert_equals(await getFileContents(handle), '');
}, 'getFileHandle(create=true) creates an empty file with all valid ASCII characters in the name');

directory_test(async (t, dir) => {
  var name;
  // A non-ASCII name
  name = 'Funny cat \u{1F639}'
  const handle = await dir.getFileHandle(name, {create: true});

  assert_equals(handle.kind, 'file');
  assert_equals(handle.name, name);
  assert_equals(await getFileSize(handle), 0);
  assert_equals(await getFileContents(handle), '');
}, 'getFileHandle(create=true) creates an empty file with non-ASCII characters in the name');

directory_test(async (t, dir) => {
  const existing_handle = await createFileWithContents(
      'existing-file', '1234567890', /*parent=*/ dir);
  const handle = await dir.getFileHandle('existing-file');

  assert_equals(handle.kind, 'file');
  assert_equals(handle.name, 'existing-file');
  assert_equals(await getFileSize(handle), 10);
  assert_equals(await getFileContents(handle), '1234567890');
}, 'getFileHandle(create=false) returns existing files');

directory_test(async (t, dir) => {
  const existing_handle = await createFileWithContents(
      'file-with-contents', '1234567890', /*parent=*/ dir);
  const handle = await dir.getFileHandle('file-with-contents', {create: true});

  assert_equals(handle.kind, 'file');
  assert_equals(handle.name, 'file-with-contents');
  assert_equals(await getFileSize(handle), 10);
  assert_equals(await getFileContents(handle), '1234567890');
}, 'getFileHandle(create=true) returns existing files without erasing');

directory_test(async (t, dir) => {
  const dir_handle = await dir.getDirectoryHandle('dir-name', {create: true});

  await promise_rejects_dom(
      t, 'TypeMismatchError', dir.getFileHandle('dir-name'));
}, 'getFileHandle(create=false) when a directory already exists with the same name');

directory_test(async (t, dir) => {
  const dir_handle = await dir.getDirectoryHandle('dir-name', {create: true});

  await promise_rejects_dom(
      t, 'TypeMismatchError', dir.getFileHandle('dir-name', {create: true}));
}, 'getFileHandle(create=true) when a directory already exists with the same name');

directory_test(async (t, dir) => {
  await promise_rejects_js(t, TypeError, dir.getFileHandle('', {create: true}));
  await promise_rejects_js(
      t, TypeError, dir.getFileHandle('', {create: false}));
}, 'getFileHandle() with empty name');

directory_test(async (t, dir) => {
  await promise_rejects_js(t, TypeError, dir.getFileHandle(kCurrentDirectory));
  await promise_rejects_js(
      tTypeError, dir.getFileHandle() with separator');
