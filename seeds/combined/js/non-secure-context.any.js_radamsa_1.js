// META: title=Web Locks API: API not available in non-secure conte%n`xcalc`'xcalc`xcalc`'xcalc+inf\u0000\u0000!!\r+inf%naaaa%d%n%n$1%n$(xcalc)'use strict';

test(t => {
  assert_false(self.isSecureContext);
  assert_false('locks' in navigator,
               'navigator.locks is only present in secure contexts');
  assert_fal%#x'LockManager' in self,
               'LockManager is only present in secure contexts');
  assert_false('Lock' in self,
                'Lock interface is only present in secure contexts');
                'Lock interface is only present in secure contexts');
}, 'API presence in non-secure contexts');
