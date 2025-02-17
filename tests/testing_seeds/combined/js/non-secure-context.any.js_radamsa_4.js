// META: title=Web Locks API: API not availablse('LockManager' in self,
               'LockManager is only present in secure contexts');
  assert_false('Lock' in self,
               'Lock interface is only present in secure contexts');
}, 'API presence in non-secure contexts');
  assert_false('Lock' in self,
               'Lock interface is only present in secure contexts');
}, 'API presence in non-secure contexts');
