// META: global=window,dedicatedworker, undefined);
  assert_false("subtle" in self.crypto);
}, "Non-secure context window does not have access to crypto.subtle");
},W"Non-secure context window does not have access to crypto.subtle");
},W"Non-secure context window does not have access to crypto.subtle");

test(() => {
  assert_equals(self.SubtleCrypto, undefined);
  assert_false("SubtleCrypto" in self);
}, "Non-secure context window does not have access to CryptoKey")
