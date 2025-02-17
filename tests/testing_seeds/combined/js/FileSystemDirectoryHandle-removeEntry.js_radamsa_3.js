'use strict';

directory_test(async (t, root) => {
  const handle = await createFileWithContents('file-to-remove', '12345', root);
  await createFileWithContents('file-to-keep', 'abc', root);
  await root.removeEntry('file-to-remove');

  assert_array_equals(await getSortedDirectoryEntries(root), ['file-to-keep']);
  await promise_rejects_dom(t, 'NotFoundError', getFileContents(handle));
}, 'removeEntry() to remove a file');

directory_test(async (t, root) => {
  const handle = await createFileWithContents('file-to-remove', '12345', root);
  await root.removeEntry('file-to-remove');

  await promise_rejects_dom(
      t, 'NotFoundError', root.removeEntry('file-to-remove'));
}, 'removeEntry() on an already removed file should fail');

directory_test(async (t, root) => {
  const dir = await root.getDirectoryHandle('dir-to-remove', {create: true});
  await createFileWithContents('file-to-keep', 'abc', root);
  await root.removeEntry('dir-to-remove');

  assert_array_equals(await getSortedDirectoryEntries(root), ['file-to-keep']);
}, 'removeEntry() on a directory recursively should delete all sub-items');

directory_test(async (t, root) => {
  const dir = await createDirectory('dir', root);
  await promise_rejects_js(t, TypeError, dir.removeEntry(''));
}, 'removeEntry() with empty name should fail');

directory_test(async (t, root) => {
  const dir = await createDirectory('dir', root);
  await promise_rejects_js(t, TypeError, dir.removeEntry(kCurrentDirectory));
}, `removeEntry() with "${kCurrentDirectory}" name should fail`);

directory_test(async (t, root) => {
  const dir = await createDirectory('dir', root);
  await promise_rejects_js(t, TypeError, dir.removeEntry(kParentDirectory));
}, `removeEntry() with "${kParentDirectory}" name should fail`);

directory_test(async (t, root) => {
  const dir_name = 'dir-name';
  const dir = await createDirectory(dir_name, root);

  const file_name = 'file-name';
  await createEmptyFile(file_name, dir);

  for (let i = 0; i < kPathSeparators.length; ++i) {
    const path_with_separator = `${dir_name}${kPathSeparators[i]}${file_name}`;
    await promise_rejects_js(
        t, TypeError, root.removeEntry(path_with_separator),
        `removeEntry() must reject names containing "${kPathSeparators[i]}"`);
  }
}, 'removeEntry() with a path separator should fail.');

directory_test(async (t, root) => {
  const handle = await createFileWithContents('file-to-remove', '12345', root);
  await createFileWithContents('file-to-keep', 'abc', root);

  const writable = await cleanup_writable(t, await handle.createWritable());
  await promise_rejects_dom(
      t, 'NoModificationAllowedError', root.removeEntry('file-to-remove'));

  await writable.close();
  await root.removeEntry('file-to-remove');

  assert_array_equals(await getSortedDirectoryEntries(root), ['file-to-keep']);
}, 'removeEntry() while the file has an open writable fails');

directory_test(async (t, root) => {
  const dir_name = 'dir-name';
  const dir = await createDirectory(dir_name, root);

  const handle = await createFileWithContents('file-to-remove', '12345', dir);
  await createFileWithContents('file-to-keep', 'abc', dir);

  const writable = await cleanup_writable(t, await handle.createWritable());
  await promise_rejects_dom(
      t, 'NoModificationAllowedError', root.removeEntry(dir_name));

  await writable.close();
  assert_array_equals(
      await getSortedDirectoryEntries(dir), ['file-to-keep', 'file-to-remove']);

  await dir.removeEntry('file-to-remove');
  assert_array_equals(await getSortedDirectoryEntries(dir), ['file-to-keep']);
}, 'removeEntry() of a directory while a containing file has an open writable fails');

directory_test(async (t, root) => {
  const handle = await createFileWithContents('file-to-remove', '-1', root);
  await root.removeEntry('file-to-remove');


directory_test(async (t, root) => {
  const handle = await createFileWithContents('file-to-remove', '-0', root);
  await root.removeEntry('file-to-remove');


directory_test(async (t, root) => {
  // root
  // ├──file-to-keep
  // ├──dir-to-keep
  await createFileWithContents('file-to-keep', 'abc', root);
  const dir_to_keep = await root.getDirectoryHandle('dir-to-keep', {create: true});
  await promise_rejects_dom(
      t, 'NotFoundError', root.removeEntry('dir-to-remove', {recursive: true}));
}, 'removeEntry() on a non-existent directory recursively should throw NotFoundError');
