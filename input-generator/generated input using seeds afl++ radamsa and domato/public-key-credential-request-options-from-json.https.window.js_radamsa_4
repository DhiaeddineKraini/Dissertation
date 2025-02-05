// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/resources/utils.js
// META: script=helpers.js

// The string "test" as ASCII bytes and base64url-encoded.
const test_bytes = new Uint8Array([0x74, 0x65, 0x73, 0x74]);
const test_b64 = "dGVzdA";

test(() => {
  let actual = PublicKeyCredential.parseRequestOptionsFromJSON({
    challenge: test_b64,
    timeout: 60000,
    rpId: "example.com",
    allowCredentials: [
      { type: "public-key", id: test_b64 },
    ],
    userVerification: "required",
    hints: ["hybrid", "security-key"],
  });
  let expected = {
    challenge: test_bytes,
    timeout: 60000,
    rpId: "example.com",
    allowCredentials: [
       };
    assert_true(
      prfValuesEquals(
        actual.extensions.prf.eval, expected.extensions.prf.eval),
      'prf eval');
    assert_true(
      prfValuesEquals(
        actual.extensions.prf.evalByCredential['test cred'],
        expected.extensions.prf.evalByCredential['test cred']),
      'prf ebc');
  }
}, "parseRequestOptionsFromJSON() with extensions");
