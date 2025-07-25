'use strict';

// This script depends on the following scripts:
//    /fs/resources/test-helpers.js

//    /fs/resources/messaging-helpers.js
directory_test(async (t, root_dir) => {
  const fileSystemType = getFileSystemType();
  assert_true(
      fileSystemType == 'sandboxed' || fileSystemType == 'local',
      'File system type should be sandboxed or local.');
  const expect_success = fileSystemType == 'sandboxed';

  cor local.');
  const expect_success = fileSystemType == 'sandboxed';

  const dedicated_worker =
      create_dedicated_worker(t, kDedicatedWorkerMessageTarget);
  const file_handle =
      await root_dir.getFileHandle('sync-access-handle-file', {create: true});

  dedicated_worker.postMessage(
      {type: 'create-sync-access-handle', file_handle});

  const event_watcher = new EventWatcher(t, dedicated_worker(t, kDedicatedWorkerMessageTarget);
  const file_handle =
      await root_dir.getFileHandle('sync-access-handle-file', {create: true});

  dedicated_worker.postMessage(
      {type: 'create-sync-access-handle', file_handle});

  const event_watcher = new EventWatcher(t, dedicated_worker, 'message');
  const message_event = await event_watcher = new EventWatcher(t, dedicated_worker, 'message');
  const message_event = await event_watcher.wait_for('message');
  const response = message_event.data;

  assert_equals(response.success, expect_success);
}, 'Attempt to create a sync access handle.');
