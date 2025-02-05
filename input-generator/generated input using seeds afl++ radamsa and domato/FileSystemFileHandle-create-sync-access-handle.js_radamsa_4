'use strict';

// This script depends on the following scripts:
//    /fs/resources/messaging-helpers.js

directory_test(async (t, root_dir) => {
  const fileSystemType = getFileSystemType();
  assert_true(
      fileSystemType == 'sandboxed' || fileSystemType == 'local',
      'File system type should be sandboxed or local.');
  const expect_success = fileSystemType == 'sandboxed';

  const dedicated_worker =
      create_dedicated_worker(t, kDedicatedWorkerMessageTarget);
  const file_handle =
      await root_dir.getFileHandle('sync-access-handle-file', {create: true});

  dedicated_worker.postMessage');
  const response = message_event.data;

  assert_equals(response.success, expect_success);
}, 'Attempt to create a sync access handle.');
