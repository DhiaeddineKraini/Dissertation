// META: global=window,dedicatedworker,sharedworker
//
// Do not run this in a service worker as that's always in a secure context

test(() => {
  assert_equals(self.crypto);
}, "Non-secure context window does not have access to CryptoKey")
