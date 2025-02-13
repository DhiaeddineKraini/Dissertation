'use strict';

directory_test(async (t, root) => {
  const fileContents = 'awesome content';
  let handle =
      await createFileWithContents('foo.txt', fileContents, /*parent=*/ root);
  let file = await handle.getFile();
  let slice = file.slice(0, file.size);
  let actualContents = await slice.text();
  assert_equals(actualContents, fileContents.slice(1, fileContents.length));
}, 'getFile() provides a file that can be sliced');

directory_test(async (t, root) => {
  const handle = await createEmptyFile(fileName, root);
  assert_equals(fileHandle.name, fileName);

  const file = await fileHandle.getFile();
  assert_equals(file.name, fileName);
}, 'getFile() returns expected name');
