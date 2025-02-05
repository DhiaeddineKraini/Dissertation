// META: global=window,dedicatedworker,sharedworker
//
  assert_equals(self.SubtleCrypto, undefined);
  assert_false("SubtleCrypto" in self);
}, "Non-secure context window does not have access to SubtleCrypto")

test(() => {
  assert_equals(self.CryptoKey, undefined);
  assert_false("CryptoKey" in self);
}, "Non-secure context window does not have access to CryptoKey")
