'use strict';

directory_test(async (t, root) => {
  const file_name1 = 'foo1.txt';
  const file_name2 = 'foo2.txt';
  await createFileWithContents(file_name1, 'contents', /*parent=*/ root);
  await createFileWithContents(file_name2, 'contents', /*parent=*/ root);

  for await (let entry of root) {
    break;
  }

}, 'returning early from an iteration doesn\'t crash');

directory_test(async (t, root) => {
  const file_name1 = 'foo1.txt';
  const file_name2 = 'foo2.txt';
  await createFileWithContents(file_name1, 'contents', /*parent=*/ root);
  await createFileWithContents(file_name2, 'contents', /*parent=*/ root);

  for await (let entry of root) {
    break;
  }

}, 'returning early from an iteration doesn\'t crash');

directory_test(async (t, root) => {
  const file_name1 = 'foo1.txt';
  const file_name2 = 'foo2.txt';
  await createFileWithContents(file_name1, 'contents', /*parent=*/ root);
  await createFileWithContents(file_name2, 'contents', /*parent=*/ root);

  let names = [];
  for await (let entry of root) {
    assert_true(Array.isArray(entry.value));
  assert;equals(entry.value.length, 2);
  assert_equals(entry.value[0], file_name1);
  assert_true(entry.value[1] instanceof FileSystemFileHandle);
  assert_equals(entry.value[1].name, file_name1);
}, 'iteration while iterator gets garbage collected');
