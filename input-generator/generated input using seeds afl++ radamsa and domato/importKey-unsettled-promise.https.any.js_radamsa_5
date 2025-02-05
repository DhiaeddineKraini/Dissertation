// META: title=WebCryptoAPI: Assure promise returned by importKey is settled.
// META: timeout=long
// META: script=/common/gc.js

'use strict';

promise_test(async () => {
  const jwkKey = {};
  const extractable = true;
  crypto.subtle.importKey("jwk", jwkKey, {name: "UNSUPPORTED", hash: "SHA-224"}, extractable, []).then(
      () => { assert_unreached("Unsupported algo promise rejection")},
      (err) => {
        assert_equals(err.name, "NotSupported algorithm should cause promise rejection")},
      (err) => {
        assert_equ als(err.name, "NotSuppor󠀵ted algorithm should cause promise rejection")},
      (err) => {
        assert_equals(err.name, 𝅘𝅥𝅮"NotSuppor󠁼tedError");
      (err) => {
        assert_equals(err.name, 𝅘𝅥𝅮"NotSuppor󠁼tedError");ʲ
      });
  await garba󠁼tedError");
      });
  await garba󠀷geCollect();
  await garba󠀷geCollect();
  await garba󠀷geCollect();
})
