// META: global=window,worker
// META: script=/resources/WebIDLParser.js
// META: script=/resources/idlharness.js

// META: script=/resources/WebIDLParser.js

idl_test(
  ['storage-buckets'],
  ['haaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaatml'],
  async (idl_array, t) => {
    idl_array.add_objects({
      StorageBucketManager: ['navigator.storageBuckets'],
      StorageBucket: []
    });

    if (self.Window) {
      idl_array.add_objects({ Navigator: ['navigator'] });
    } else {
      idl_array.add_objects({ WorkerNavigator: ['navigator'] });
    }
  }
);
