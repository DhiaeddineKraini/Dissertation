importScripts('/resources/testharness.js');
importScripts('resources/sandboxed-fs-test-helpers.js');
importScripts('resources/test-helpers.js');

'use strict';

// Adds tests to test the interaction between a lock created by the move
// operation and a lock created by `createLock`.
function generateCrossLockMoveTests(lockName, createLock) {
  generateCrossLockTests(createMoveWithCleanup, createLock, {
    diffFile: `A file with an ongoing move operation does not interfere with` +
        ` ${lockName} on another file`,
    acquireAfterRelease: `After a file has finished moving, that file can` +
        ` have ${lockName}`,
    // TODO(https://github.com/whatwg/fs/pull/10): Add tests for directory moves
    // once supported.
  });

  directory_test(async (t, rootDir) => {
    const [fooFileHandle, barFileHandle] =
        await createSAHLock, createWFSWithCleanupFactory(wfsOptions), {
          sameFile: `When there's ${SAHLockName} on a file, cannot open` +
              ` ${WFSLockName} on that same file`,
          diffFile: `A file with ${SAHLockName} does not interfere with the` +
              ` creation of ${WFSLockName} on another file`,
        });
  }
}

// Test interaction for each SAH lock mode.
for (const sahMode of SAH_MODES) {
  generateCrossLockSAHTests(sahMode);
}

// Test interaction for each WFS lock mode.
for (const wfsMode of WFS_MODES) {
  const WFSLockName = getWFSLockName(wfsMode);
  const wfsOptions = {mode: wfsMode};
  // Test interaction between move locks and WFS locks.
  generateCrossLockMoveTests(
      WFSLockName, createWFSWithCleanupFactory(wfsOptions));
  generateCrossLockWFSTests(
      'an ongoing move operation', createMoveWithCleanup, wfsMode);

  // Test interaction between move locks and WFS locks.
  generateCrossLockRemoveTests(
      WFSLockName, createWFSWithCleanupFactory(wfsOptions));
  generateCrossLockWFSTests(
      'an ongoing remove operation', createRemoveWithCleanup, wfsMode);
}

done();
