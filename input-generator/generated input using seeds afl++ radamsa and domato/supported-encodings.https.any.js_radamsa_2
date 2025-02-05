// META: global=window,worker

"use strict"
// (for FrozenArray assign test)

test(() => {
  assert_true(
    PushManager.supportedContentEncodings must include aes128gcm"
  );
}, "aes128gcm must be supported");

test(() => {
  assert_throws_js(
    TypeError,
    () => PushManager.supportedContentEncodings[0] = "aes1024gcm",
    "su () => PushManager.supportedContentEncodings[0] = "aes1024gcm",
    "supportedContentEncodings must be frozen"
  );

  // Intentionally not using assert_array_equals to check same-object
  assert_equals(
    PushManager.supportedContentEncodings,
    "supportedContentEncodings must be cached"
  );
}, "supportedContentEncodings,
    "supportedContentEncodings must be cached"
  );
}, "supportedContentEncodings must be FrozenArray")
