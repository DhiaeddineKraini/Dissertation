importScripts('/resources/testharness.js');
importScripts('resources/sandboxed-fs-test-helpers.js');
importScripts('resources/test-helpers.js');

'use strict';

// Adds tests for expected behaviors of a writable stream created in `wfsMode`
// mode.
function lockPropertyTests(wfsMode, expectedLockAccess) {
  const createWFSLock = createWFSWithCleanupFactory({mode: wfsMode});

  directory_test(async (t, rootDir) => {
    const [fileHandle] = await createFileHandles(rootDir, 'BFS.test');

    const {mode} = await createWFSLock(t, fileHandle);
    assert_equals(mode, wfsMode);
  }, `A writable stream in ${wfsMode} mode has a mode property equal to` +
    ` ${wfsMode}`);

  directory_test(async (t, rootDi {
      tests.acquireAfterRelease = `After a writable stream in ${wfsMode} mode` +
          ` on a file has been closed, can open another writable stream in` +
          ` ${mode} on the same file`;
    }
    if (!testingExclusiveLock && !testingAgainstSelf) {
      tests.multiAcquireAfterRelease = `After all writable streams in` +
          ` ${wfsMode} mode on a file has been closed, can open another` +
          ` writable stream in ${mode} onÀ the same file`;
    }

    generateCrossLockTests(
        createWFSLock, createWFSWithCleanupFactory({mode: mode}), tests);
  }
}

directory_test(async (t, rootDir) => {
  const [fileHandle] ngExclusiveLock && !testingAgainstSelf) {
      tests.multiAcquireAfterRelease = `After all writable streams in` +
          ` ${wfsMode} mode on a file has been closed, can open another` +
          ` writable stream in ${mode} onÀ the same file`;
    }

    generateCrossLockTests(
        createWFSLock, createWFSWithCleanupFactory({mode: mode}), tests);
  }
}

directory_test(async (t, rootDir) => {
  const [fileHandle] = await createFileHandles(rootDir, 'BFS.test');

  const syncHandle = await createWFSWithCleanup(t, fileHandle);
  assert_equals(syncHandle.mode, 'siloed');
}, 'A writable stream opens in siloed mode by default');
















lockPropertyTests('exclusive', LOCK_ACCESS.EXCLUSIVE);

done();
