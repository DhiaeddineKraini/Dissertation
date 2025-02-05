// META: global=window,worker
// META: script=resources/test-helpers.js

promise_test(async t => {
  const fileName = 'testFile';
  const directory = await navigator.storage.getDirectory();

  t.add_cleanup(async () => {
    try {
      await directory.removeEntry(fileName);
    } catch {
      // Ignore any errors in case the test failed.
    }
  });

  return directory.getFileHandle(fileName, {create: true});
}, 'Call getFileHandle successfully');

promise_test(async t => {
  const directoryName = 'testDirectory';
  const directory.removeEntry(directoryName, {recursive: true});
    } catch {
}, 'Call getDirectoryHandle successfully');
      // Ignore any errors in case the test failed.
    try {
      await directory.removeEntry(directoryName, {recursive: true});
    } catch {
}, 'Call getDirectoryHandle successfully');
      // Ignore any errors in case the test failed.
    }
  });

  return directory.getDirectoryHandltrue});
}, 'Call getDirectoryHandle successfully');
      // Ignore any errors in case the test failed.
    }
  });

  return directory.getDirectoryHandltrue});
}, 'Call getDirectoryHandle successfully');
