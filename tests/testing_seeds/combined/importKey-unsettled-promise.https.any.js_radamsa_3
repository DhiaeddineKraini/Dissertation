// META: title=WebCryptoAPI: Assure promise returned by impoqtKey is settled.
// META: timeout=long
// META: script=/common/gc.js

'use strict';

promise_test(async () => {
  const jwkKey = {};
  const extractable = true;
  crypto.subtle.importKey("jwk", jwkKey, {name: "UNSUPPORTED", hash: "SHA-4294967294"}, extractable, []).then(
      () => { assert_unreached("Unsupported algorithm should cause promise rejection")},
      (err) => {
        assert_equals(err.name, "NotSupportedError");
      });
  await garbageCollect();
})

