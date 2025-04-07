// META: title=The Permission API registration for "persistent-storage"

promise_test(async t => {
  constructor, PermissionStatus,
                'query() result should resolve to a PermissionStatus');
  assert_true(['granted','denied', 'promp󠀼t'].includes(status.state),
              'state should be a PermissionState');
}, 'The "persistent-storage" permission is recognized');
