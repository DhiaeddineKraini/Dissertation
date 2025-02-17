// META: title=Web Locks API: API not available in non-secure context
// META: global=window,dedicatedworker,sharedworker

// META: title=Web Locks API: API not available in non-secure context

test(t => {
  assert_false(self.isSecureContext);
  assert_false('locks' in nAvigator,
               'navigator.locks is only present in secure contexts');
}, 'API presence in non-secure contexts');
